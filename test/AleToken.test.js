const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AleToken", function () {
    let aleToken, owner, addr1, addr2;

    beforeEach(async () => {
        const AleToken = await ethers.getContractFactory("AleToken");
        [owner, addr1, addr2] = await ethers.getSigners();

        // Usa 1 milione di token con 18 decimali
        const initialSupply = ethers.parseUnits("1000000", 18);
        aleToken = await AleToken.deploy(initialSupply);
        await aleToken.waitForDeployment();
    });

    it("Should assign the total supply to the owner", async () => {
        const ownerBalance = await aleToken.balanceOf(owner.address);
        expect(ownerBalance).to.equal(ethers.parseUnits("1000000", 18));
    });

    it("Should transfer tokens between accounts", async () => {
        await aleToken.transfer(addr1.address, ethers.parseUnits("500", 18));
        const addr1Balance = await aleToken.balanceOf(addr1.address);
        expect(addr1Balance).to.equal(ethers.parseUnits("500", 18));
    });

    it("Should approve and transferFrom tokens", async () => {
        await aleToken.approve(addr1.address, ethers.parseUnits("1000", 18));
        await aleToken.connect(addr1).transferFrom(owner.address, addr2.address, ethers.parseUnits("500", 18));
        const addr2Balance = await aleToken.balanceOf(addr2.address);
        expect(addr2Balance).to.equal(ethers.parseUnits("500", 18));
    });

    it("Should fail if transfer amount exceeds balance", async () => {
        await expect(
            aleToken.transfer(addr1.address, ethers.parseUnits("1000001", 18))
        ).to.be.revertedWith("Saldo insufficiente");
    });

    it("Should fail if transferFrom amount exceeds allowance", async () => {
        await aleToken.approve(addr1.address, ethers.parseUnits("500", 18));
        await expect(
            aleToken.connect(addr1).transferFrom(owner.address, addr2.address, ethers.parseUnits("1000", 18))
        ).to.be.revertedWith("Non autorizzato");
    });

    it("Should emit a Transfer event on transfer", async () => {
        await expect(aleToken.transfer(addr1.address, ethers.parseUnits("500", 18)))
            .to.emit(aleToken, "Transfer")
            .withArgs(owner.address, addr1.address, ethers.parseUnits("500", 18));
    });

    it("Should emit an Approval event on approve", async () => {
        await expect(aleToken.approve(addr1.address, ethers.parseUnits("500", 18)))
            .to.emit(aleToken, "Approval")
            .withArgs(owner.address, addr1.address, ethers.parseUnits("500", 18));
    });

    it("Should transfer tokens between user accounts", async () => {
        // Transfer 500 ALE from owner to addr1
        await aleToken.transfer(addr1.address, ethers.parseUnits("500", 18));
        // Transfer 200 ALE from addr1 to addr2
        await aleToken.connect(addr1).transfer(addr2.address, ethers.parseUnits("200", 18));

        const addr1Balance = await aleToken.balanceOf(addr1.address);
        const addr2Balance = await aleToken.balanceOf(addr2.address);

        expect(addr1Balance).to.equal(ethers.parseUnits("300", 18));
        expect(addr2Balance).to.equal(ethers.parseUnits("200", 18));
    });
});

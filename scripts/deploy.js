const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const initialSupply = ethers.parseUnits("1000000", 18);
    const AleToken = await ethers.getContractFactory("AleToken");
    const aleToken = await AleToken.deploy(initialSupply);
    await aleToken.waitForDeployment();

    console.log(`AleToken deployed to: ${aleToken.target}`);
}

main().catch((error) => {
    console.error("Error during deployment:", error);
    process.exitCode = 1;
});

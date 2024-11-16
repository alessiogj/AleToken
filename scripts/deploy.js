async function main() {
    console.log("\uD83D\uDE80 Starting deployment...");

    // Ottieni i signer (account disponibili)
    const [deployer, account1, account2] = await ethers.getSigners();

    console.log(`\uD83D\uDCBC Deployer account: ${deployer.address}`);
    console.log(`\uD83D\uDD11 Account1: ${account1.address}`);
    console.log(`\uD83D\uDD11 Account2: ${account2.address}`);

    // Bilancio del deployer prima del deploy
    const deployerBalance = await ethers.provider.getBalance(deployer.address);
    console.log(`\uD83D\uDCB0 Deployer balance before deployment: ${ethers.formatEther(deployerBalance)} ETH`);

    // Ottieni la factory del contratto e distribuisci
    const AleToken = await ethers.getContractFactory("AleToken");
    const initialSupply = ethers.parseUnits("1000000", 18); // 1 milione di token con 18 decimali
    const aleToken = await AleToken.deploy(initialSupply);

    // Attendi il completamento del deploy
    await aleToken.waitForDeployment();
    console.log(`✅ AleToken deployed to: ${aleToken.target}`);

    // Bilancio del deployer dopo il deploy
    const deployerBalanceAfter = await ethers.provider.getBalance(deployer.address);
    console.log(`\uD83D\uDCB0 Deployer balance after deployment: ${ethers.formatEther(deployerBalanceAfter)} ETH`);

    // Verifica il totalSupply
    const totalSupply = await aleToken.totalSupply();
    console.log(`\uD83D\uDCA2 Total Supply: ${ethers.formatUnits(totalSupply, 18)} ALE`);

    // Controlla il bilancio del deployer
    const deployerTokenBalance = await aleToken.balanceOf(deployer.address);
    console.log(`\uD83D\uDCBC Deployer token balance: ${ethers.formatUnits(deployerTokenBalance, 18)} ALE`);

    // Esegui un trasferimento iniziale a Account1
    console.log(`\uD83D\uDCE4 Transferring 100 ALE to Account1 (${account1.address})...`);
    const transferToAccount1Tx = await aleToken.transfer(account1.address, ethers.parseUnits("100", 18));
    await transferToAccount1Tx.wait();
    console.log(`✅ Transferred 100 ALE to Account1`);

    // Controlla il bilancio del destinatario
    const account1Balance = await aleToken.balanceOf(account1.address);
    console.log(`\uD83D\uDCBC Account1 token balance: ${ethers.formatUnits(account1Balance, 18)} ALE`);

    // Funzione per testare il trasferimento tra utenti
    async function transferBetweenUsers(sender, recipient, amount) {
        console.log(`\uD83D\uDCE4 Transferring ${ethers.formatUnits(amount, 18)} ALE from ${sender.address} to ${recipient.address}...`);
        const transferTx = await aleToken.connect(sender).transfer(recipient.address, amount);
        await transferTx.wait();
        console.log(`✅ Transferred ${ethers.formatUnits(amount, 18)} ALE from ${sender.address} to ${recipient.address}`);

        const senderBalance = await aleToken.balanceOf(sender.address);
        const recipientBalance = await aleToken.balanceOf(recipient.address);

        console.log(`\uD83D\uDCBC Sender (${sender.address}) token balance: ${ethers.formatUnits(senderBalance, 18)} ALE`);
        console.log(`\uD83D\uDCBC Recipient (${recipient.address}) token balance: ${ethers.formatUnits(recipientBalance, 18)} ALE`);
    }

    // Trasferimento di token da Account1 a Account2
    const transferAmount = ethers.parseUnits("50", 18); // 50 ALE
    await transferBetweenUsers(account1, account2, transferAmount);

    console.log("\uD83D\uDE80 Deployment and initial setup complete!");
}

main().catch((error) => {
    console.error("❌ Error during deployment:", error);
    process.exitCode = 1;
});

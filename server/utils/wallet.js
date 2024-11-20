// server/utils/wallet.js
const { ethers } = require("ethers");

async function sendEther(privateKey, toAddress, amountInEther) {
    // Connect to the Ethereum network (e.g., mainnet, testnet)
    const provider = new ethers.providers.InfuraProvider("mainnet", process.env.INFURA_PROJECTID); // Replace with your Infura project ID

    // Create a wallet instance
    const wallet = new ethers.Wallet(privateKey, provider);

    // Convert the amount to a BigNumber
    const amount = ethers.utils.parseEther(amountInEther);

    try {
        // Send the transaction
        const tx = await wallet.sendTransaction({
            to: toAddress,
            value: amount
        });

        console.log("Transaction Hash:", tx.hash);

        // Wait for the transaction to be mined
        const receipt = await tx.wait();
        console.log("Transaction was mined in block:", receipt.blockNumber);
    } catch (error) {
        console.error("Error sending transaction:", error);
    }
}

module.exports = { sendEther };
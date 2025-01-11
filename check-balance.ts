

import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const main = async () => {
  const publicKey = new PublicKey("9vZCfn4WnaSymyonmtVo9TZw8uWLeeQ1r9EWE2wUGD3z");

  const connection = new Connection("https://api.devnet.solana.com", "confirmed");

  const balanceInLamports = await connection.getBalance(publicKey);

  const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSol}!`
  );
};

// Call the async function
main().catch((error) => {
  console.error("An error occurred:", error);
});























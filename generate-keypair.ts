

import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
 
const keypair1 = getKeypairFromEnvironment("SECRET_KEY");
 
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
);


 
// public key : 9vZCfn4WnaSymyonmtVo9TZw8uWLeeQ1r9EWE2wUGD3z
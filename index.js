const crypto = require('crypto');
const secp256k1 = require('secp256k1');

function digest(str, algo = "sha256") {
    return crypto.createHash(algo).update(str).digest();
  }
 
if (process.argv.length !== 3) {
    console.log("Usage: checksignature <message>")
    process.exit(1)
}

const message = process.argv[2]; // message to be signed you pass
const messageDigest = digest(message);

console.log(`0) Alice's message: 
	message: ${message}
	message digest: ${messageDigest.toString("hex")}`);

//
// Generate keypairs
//

// generate privateKey
let privateKey;
do {
  privateKey = crypto.randomBytes(32);
} while (!secp256k1.privateKeyVerify(privateKey));

// create public key
const publicKey = secp256k1.publicKeyCreate(privateKey);
console.log(`1) Alice aquired new keypair:
	publicKey: ${publicKey.toString("hex")}
	privateKey: ${privateKey.toString("hex")}`);

//
// Sign the message
//
console.log(`2) Alice signed her message digest with her privateKey to get its signature:`);
const sigObj = secp256k1.ecdsaSign(messageDigest, privateKey);
const sig = sigObj.signature;
console.log("	Signature:", sig.toString("hex"));

//
// Verify
//
console.log(`3) Bob verifyed by 3 elements ("message digest", "signature", and Alice's "publicKey"):`);
let verified = secp256k1.ecdsaVerify(sig, messageDigest, publicKey);
console.log("	verified:", verified);


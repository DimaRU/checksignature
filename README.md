[![License](https://img.shields.io/github/license/yonaskolb/Mint.svg?style=for-the-badge)](LICENSE)


# Checksignature

A Blockchain developer course project. Sign and check message signature.


## Requirements

* nodejs 18.0
* secp256k1 4.x

## Build

```bash
brew install node
git clone https://github.com/DimaRU/checksignature
cd checksignature
npm install
```

## Usage

```
node index.js "message"
```

## Documentation:

* [secp256k1 V4.x module](https://github.com/cryptocoinjs/secp256k1-node/blob/HEAD/API.md)
* [Crypto module](https://nodejs.org/api/crypto.html#cryptocreatehashalgorithm-options)
* [How to create a SHA-256 hash in Node.js](https://melvingeorge.me/blog/create-sha256-hash-nodejs)
* [Example source](https://gist.github.com/akirattii/1ccb30c3aa67876c232adfe9540c6ed6)

## License
[MIT](LICENSE)

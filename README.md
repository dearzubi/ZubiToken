# Tutorial: ERC20 Token with Capped Supply

Dependencies:

1. Hardat
2. Oppenzeppelin
3. Dotenv
4. NodeJs & NPM



Steps:

1. Clone the project and run the following command:

```
npm run install
```

2. Create a `.env` file with following variables:

```
Netowkr_URL=Your Infura or Alchemy Polygon Mainnet/Testnet URL
PRIV_KEY=Your accounts private key
```

3. Run the following command:

```
npx hardhat run ./scripts/deploy.js --network mumbai
```

4. Copy the address of the Token, add it to Metmask through "Import Token" under assets. Make sure you are on Polygon Mainnet/Testnet.

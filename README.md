# Ethereum Transaction DApp

This dynamic Web 3.0 application facilitates effortless Ethereum transactions on the blockchain network. It combines Solidity smart contracts, MetaMask integration, and a modern UI/UX developed with React.js and Tailwind CSS.

## Table of Contents

1. [Technologies and Frameworks](#technologies-and-frameworks)
2. [Setup and Usage](#setup-and-usage)
3. [Design Choices](#design-choices)

---

## Technologies and Frameworks

### Smart Contract (smart_contract/)

- [Hardhat](https://hardhat.org/)
- [@nomiclabs/hardhat-waffle](https://github.com/nomiclabs/hardhat/tree/master/packages/hardhat-waffle)
- [ethereum-waffle](https://ethereum-waffle.readthedocs.io/en/latest/)
- [chai](https://www.chaijs.com/)
- [@nomiclabs/hardhat-ethers](https://github.com/nomiclabs/hardhat/tree/master/packages/hardhat-ethers)

### Client (client/)

- [Vite](https://vitejs.dev/)

---

## Setup and Usage

### Smart Contract (smart_contract/)

1. Install Node.js if not already installed on your system.
2. Navigate to the `smart_contract/` directory.
3. Run the following commands to install the required dependencies:

   ```bash
   npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

### Smart Contract (smart_contract/)

1. Install Node.js if not already installed on your system.
2. Navigate to the `client/` directory.
3. Run the following commands to install vite globally:

   ```bash
   npm install -g vite

4. Install client side dependencies by running:

    ```bash
   npm install

5. Start the developement Server:

    ```bash
   npm run dev

---

## Design Choices

In the development of this DApp, we made the following design choices:

 - Solidity Smart Contracts: We chose Solidity as the programming language for our smart contracts due to its widespread adoption in the Ethereum ecosystem and its strong security features.

 - MetaMask Integration: We integrated MetaMask for secure wallet pairing, allowing users to interact with the Ethereum network directly from their browsers.

 - React.js and Tailwind CSS: We selected React.js and Tailwind CSS for the frontend to provide a modern and responsive user interface. This combination ensures a smooth and enjoyable user experience.
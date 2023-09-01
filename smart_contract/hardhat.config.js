require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/dUn4KuAgKwNI8WNGU1-42KX0FloKjLBs',
      accounts: ['9f630744ca86e6eab36a7a440614dc6d88523f3676a51aa5d7a11736dcfe3d7d'],
    },
  },
};
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
      goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Kj9KakSWwZbqLgBNkk9Fw9ogGxiLdNbe',
      accounts: ['4cc379d34ce09230e52934db14b0ab8b0c03f18469412b2755982c713ad470af'],
    },
  },
};
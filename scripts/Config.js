require('dotenv').config()
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.ETH_MAINNET_1));


module.exports = {

}
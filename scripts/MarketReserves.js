require('dotenv').config()
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.ETH_MAINNET_1));
const { getEventEmissions } = require("./Utils")


const printCompoundReserveData = async (markets) => {
    for(const market of markets) {
        await getEventEmissions(market.contract, 'ReservesReduced', 3, await web3.eth.getBlockNumber(), 0, async (events) => {

            for(const event of events) {
                const values = event.returnValues;
                const blockNumber = event.blockNumber;

                console.log("----------\nBlockNumber: %s", blockNumber)
                console.log("Market: %s", market.symbol)
                console.log("Args: %s", values)
            }

        })
    }
}


module.exports = {
    printCompoundReserveData
}
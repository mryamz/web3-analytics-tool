require('dotenv').config()
const { parseUnits } = require('ethers/lib/utils');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.ETH_MAINNET_1));
const { getEventEmissions } = require("./Utils")


const printCompoundReserveData = (markets) => {
    (async () => {
        for (const market of markets) {
            const currentBlockNumber = await web3.eth.getBlockNumber()
            await getEventEmissions(market.contract, 'ReservesReduced', 1, currentBlockNumber, 0, async (events) => {

                for (const event of events) {
                    const values = event.returnValues;
                    const blockNumber = event.blockNumber;
                    const txhash = event.transactionHash;

                    const reduceAmountRaw = values.reduceAmount
                    const reduceAmount = reduceAmountRaw / Math.pow(10, market.underlyingDecimals)

                    console.log("txhash: %s", txhash)
                    console.log("Market: %s", market.symbol)
                    console.log("Amount Reduced: %s %s", reduceAmount, market.symbol.substring(1))
                }

            })
        }
    })();


}


module.exports = {
    printCompoundReserveData
}
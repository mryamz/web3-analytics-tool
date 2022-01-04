require('dotenv').config()
const { parseUnits } = require('ethers/lib/utils');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.WS_ETH_MAINNET_2));
const { getEventEmissions, writeReserveDataToCSV } = require("./Utils")


const printCompoundReserveData = async (markets) => {
    for (const market of markets) {
        const currentBlockNumber = await web3.eth.getBlockNumber()
        await getEventEmissions(market.contract, 'ReservesReduced', 1, currentBlockNumber, 0, async (events) => {
            var totalReduced = 0
            for (const event of events) {
                const values = event.returnValues;
                const blockNumber = event.blockNumber;
                const txhash = event.transactionHash;
                const reduceAmountRaw = values.reduceAmount
                const reduceAmount = reduceAmountRaw / Math.pow(10, market.underlyingDecimals)
                totalReduced += reduceAmount
            }

            const totalReservesRaw = await market.contract.methods.totalReserves().call()
            const totalReserves = totalReservesRaw / Math.pow(10, market.underlyingDecimals)
            const underlyingSymbol =  market.symbol.substring(1);
            writeReserveDataToCSV(underlyingSymbol, totalReduced, totalReserves, (totalReduced + totalReserves))
        })
    }


}


module.exports = {
    printCompoundReserveData
}
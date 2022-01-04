require('dotenv').config()
const { parseUnits } = require('ethers/lib/utils');
const Web3 = require('web3');
const web3 = new Web3(process.env.HTTP_ETH_MAINNET_1);
const { getEventEmissions, writeReserveDataToCSV, getMarketsByAddress, writeLiquidationDatatoCSV } = require("./Utils")

const printCompoundLiquidationData = async (market) => {
    const currentBlockNumber = await web3.eth.getBlockNumber()
    await getEventEmissions(market.contract, 'LiquidateBorrow', 1, currentBlockNumber, 0, async (events) => {

        for(const event of events) {
            const values = event.returnValues;
            const blockNumber = event.blockNumber;
            const timestamp = web3.eth.getBlock(blockNumber).timestamp
            const txhash = event.transactionHash;

            const repayAmountRaw = values.repayAmount;
            const cTokenCollateral = getMarketsByAddress(values.cTokenCollateral)
            const seizeTokensRaw = values.seizeTokens;
            const exchangeRateRaw = await cTokenCollateral.contract.methods.exchangeRateCurrent().call(block_identifer = blockNumber)

            const repayAmount = repayAmountRaw / Math.pow(10, market.underlyingDecimals);
            const seizeTokens = seizeTokensRaw / Math.pow(10, 8)
            const exchangeRate = exchangeRateRaw / Math.pow(10, 18 - 8 + cTokenCollateral.underlyingDecimals);
            const seizedUnderlying = seizeTokens * exchangeRate
            const seizedUnderlyingSymbol = cTokenCollateral.symbol.substring(1)
            const borrowedTokenSymbol = market.symbol.substring(1)

            writeLiquidationDatatoCSV(txhash, timestamp, seizedUnderlyingSymbol, seizedUnderlying, borrowedTokenSymbol, repayAmount)


        }

    }, true)

}

module.exports = {
    printCompoundLiquidationData
}
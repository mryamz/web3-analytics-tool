const { COMPOUND_MARKETS } = require("./Config")
const fs = require('fs')

const writeReserveDataToCSV = (symbol, totalReduced, currentReserves, totalReservesAccumulated) => {

    const line = `${symbol}, ${totalReduced}, ${currentReserves} ${totalReservesAccumulated}\n`
    console.log(line)
    fs.writeFile(`./csvData/reserveData.csv`, line, { flag: 'a+' }, err => {
        if (err) {
            console.log(err)
        }
    })
}

const writeLiquidationDatatoCSV = (txHash, timeOfLiquidation, cTokenCollateralSymbol, seizeTokens, borrowedTokenSymbol, repayAmount) => {
    const line = `${txHash}, ${timeOfLiquidation}, ${cTokenCollateralSymbol}, ${seizeTokens}, ${borrowedTokenSymbol}, ${repayAmount}\n`
    fs.writeFile(`./csvData/borrow-${borrowedTokenSymbol}.csv`, line, { flag: 'a+' }, err => {
        if (err) {
            console.log(err)
        }
    })
}

const getMarketsByAddress = (address) => {
    for (const e of COMPOUND_MARKETS) {
        if (e.contract.options.address.toLowerCase() === address.toLowerCase()) {
            return e
        }
    }

    return -1
}

const getEventEmissions = async (contract, eventName, batch, newerBlock, olderBlock, task, logging = false) => {
    const deltaBlock = newerBlock - olderBlock
    const chunk = parseInt(deltaBlock / batch)
    if (logging)
        console.log("chunk_size=%s", chunk)

    for (var i = 1; i < batch + 1; i++) {
        const start = ((chunk * (i - 1)) + olderBlock) + 1
        const end = (chunk * i) + olderBlock

        contract.getPastEvents(
            eventName,
            {
                fromBlock: start,
                toBlock: end
            },
            async (err, events) => {
                if (err)
                    console.log("Problem in getEventEmissions: %s", err)

                if (logging)
                    console.log("Found %s %s events in %s", events.length, eventName, contract.options.address)

                await task(events)
            }
        )
    }
}

module.exports = {
    getMarketsByAddress,
    getEventEmissions,
    writeReserveDataToCSV,
    writeLiquidationDatatoCSV
}
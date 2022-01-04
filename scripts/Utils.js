const { COMPOUND_MARKETS } = require("./Config")


const getMarketsByAddress = (address) => {
    for(const e of COMPOUND_MARKETS) {
        if(e.contract.options.address.toLowerCase() === address.toLowerCase()) {
            return e
        }
    }

    return -1
}

const getEventEmissions = async (contract, eventName, batch, newerBlock, olderBlock, task) => {
    const deltaBlock = newerBlock - olderBlock
    const chunk = parseInt(deltaBlock / batch)
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

                console.log("Found %s events", events.length)

                await task(events)
            }
        )
    }
}

module.exports = {
    getMarketsByAddress,
    getEventEmissions,
}
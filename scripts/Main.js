
const { cUSDT, cUSDC, COMPOUND_MARKETS, cDAI, cAAVE, cBAT, cCOMP, cETH, cLINK, cMKR, cREP, cSUSHI, cSAI, cTUSD, cUNI, cUSDP, cWBTC, cWBTC2, cYFI, cZRX } = require("./Config");
const { printCompoundLiquidationData } = require("./Liquidations");

const { printCompoundReserveData } = require("./MarketReserves");;


// main driver
(async () => {

    await printCompoundLiquidationData(cWBTC2)
    await printCompoundLiquidationData(cYFI)
    await printCompoundLiquidationData(cZRX)
})()
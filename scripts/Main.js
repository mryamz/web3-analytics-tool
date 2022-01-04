
const { cUSDT, cUSDC, COMPOUND_MARKETS, cDAI, cAAVE, cBAT, cCOMP, cETH, cLINK, cMKR, cREP, cSUSHI, cSAI, cTUSD, cUNI, cUSDP, cWBTC } = require("./Config");
const { printCompoundLiquidationData } = require("./Liquidations");

const { printCompoundReserveData } = require("./MarketReserves");;


// main driver
(async () => {

    await printCompoundLiquidationData(cSUSHI)
    await printCompoundLiquidationData(cTUSD)
    await printCompoundLiquidationData(cUNI)
    await printCompoundLiquidationData(cUSDP)
    await printCompoundLiquidationData(cWBTC)
})()

const { cUSDT, cUSDC, COMPOUND_MARKETS, cDAI, cAAVE, cBAT, cCOMP, cETH, cLINK, cMKR, cREP } = require("./Config");
const { printCompoundLiquidationData } = require("./Liquidations");

const { printCompoundReserveData } = require("./MarketReserves");;


// main driver
(async () => {

    await printCompoundLiquidationData(cREP)
})()
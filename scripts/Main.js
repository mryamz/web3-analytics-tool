
const { cUSDT, cUSDC, COMPOUND_MARKETS, cDAI, cAAVE, cBAT, cCOMP, cETH } = require("./Config");
const { printCompoundLiquidationData } = require("./Liquidations");

const { printCompoundReserveData } = require("./MarketReserves");;


// main driver
(async () => {

    await printCompoundLiquidationData(cETH)
})()
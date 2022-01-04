
const { cUSDT, cUSDC, COMPOUND_MARKETS, cDAI } = require("./Config");
const { printCompoundLiquidationData } = require("./Liquidations");

const { printCompoundReserveData } = require("./MarketReserves");;


// main driver
(async () => {

    await printCompoundLiquidationData(cDAI)
})()
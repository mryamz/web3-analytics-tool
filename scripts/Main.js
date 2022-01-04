
const { cUSDT, cUSDC, COMPOUND_MARKETS } = require("./Config");

const { printCompoundReserveData } = require("./MarketReserves");;


// main driver
(async () => {

    await printCompoundReserveData(COMPOUND_MARKETS)
})()
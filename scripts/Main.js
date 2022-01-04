
const { cUSDT, cUSDC } = require("./Config");

const { printCompoundReserveData } = require("./MarketReserves");;


// main driver
(async () => {

    await printCompoundReserveData([cUSDC])
})()
require('dotenv').config()
const Web3 = require('web3');
const web3 = new Web3(process.env.HTTP_ETH_MAINNET_2);

const market = (symbol, path, address, decimals, underlyingDecimals) => {

    return {
        symbol: symbol,
        contract: new web3.eth.Contract(require(path), address),
        decimals: decimals,
        underlyingDecimals: underlyingDecimals
    }
}

const cAAVE = market("cAAVE", '../web3/ethereum/mainnet/abi/compound/cAAVE.json', '0xe65cdb6479bac1e22340e4e755fae7e509ecd06c', 8, 18)
const cBAT = market("cBAT", '../web3/ethereum/mainnet/abi/compound/cBAT.json', '0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e', 8, 18)
const cCOMP = market("cCOMP", '../web3/ethereum/mainnet/abi/compound/cCOMP.json', '0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4', 8, 18)
const cDAI = market("cDAI", '../web3/ethereum/mainnet/abi/compound/cDAI.json', '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643', 8, 18)
const cETH = market("cETH", '../web3/ethereum/mainnet/abi/compound/cETH.json', '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5', 8, 18)
const cLINK = market("cLINK", '../web3/ethereum/mainnet/abi/compound/cLINK.json', '0xface851a4921ce59e912d19329929ce6da6eb0c7', 8, 18)
const cMKR = market("cMKR", '../web3/ethereum/mainnet/abi/compound/cLINK.json', '0x95b4ef2869ebd94beb4eee400a99824bf5dc325b', 8, 18)
const cREP = market("cREP", '../web3/ethereum/mainnet/abi/compound/cREP.json', '0x158079ee67fce2f58472a96584a73c7ab9ac95c1', 8, 18)
const cSAI = market("cSAI", '../web3/ethereum/mainnet/abi/compound/cSAI.json', '0xf5dce57282a584d2746faf1593d3121fcac444dc', 8, 18)
const cSUSHI = market("cSUSHI", '../web3/ethereum/mainnet/abi/compound/cSUSHI.json', '0x4b0181102a0112a2ef11abee5563bb4a3176c9d7', 8, 18)
const cTUSD = market("cTUSD", '../web3/ethereum/mainnet/abi/compound/cTUSD.json', '0x12392f67bdf24fae0af363c24ac620a2f67dad86', 8, 18)
const cUNI = market("cUNI", '../web3/ethereum/mainnet/abi/compound/cUNI.json', '0x35a18000230da775cac24873d00ff85bccded550', 8, 18)
const cUSDC = market("cUSDC", '../web3/ethereum/mainnet/abi/compound/cUSDC.json', '0x39aa39c021dfbae8fac545936693ac917d5e7563', 8, 6)
const cUSDP = market("cUSDP", '../web3/ethereum/mainnet/abi/compound/cUSDP.json', '0x041171993284df560249b57358f931d9eb7b925d', 8, 18)
const cUSDT = market("cUSDT", '../web3/ethereum/mainnet/abi/compound/cUSDT.json', '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9', 8, 6)
const cWBTC = market("cWBTC", '../web3/ethereum/mainnet/abi/compound/cWBTC.json', '0xc11b1268c1a384e55c48c2391d8d480264a3a7f4', 8, 8)
const cWBTC2 = market("cWBTC2", '../web3/ethereum/mainnet/abi/compound/cWBTC2.json', '0xccf4429db6322d5c611ee964527d42e5d685dd6a', 8, 8)
const cYFI = market("cYFI", '../web3/ethereum/mainnet/abi/compound/cYFI.json', '0x80a2ae356fc9ef4305676f7a3e2ed04e12c33946', 8, 18)
const cZRX = market("cZRX", '../web3/ethereum/mainnet/abi/compound/cZRX.json', '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407', 8, 18)

const COMPOUND_MARKETS = [
    cAAVE,
    cBAT,
    cCOMP,
    cDAI,
    cETH,
    cLINK,
    cMKR,
    cREP,
    cSAI,
    cSUSHI,
    cTUSD,
    cUNI,
    cUSDC,
    cUSDP,
    cUSDT,
    cWBTC,
    cWBTC2,
    cYFI,
    cZRX,
]

module.exports = {
    cAAVE,
    cBAT,
    cCOMP,
    cDAI,
    cETH,
    cLINK,
    cMKR,
    cREP,
    cSAI,
    cSUSHI,
    cTUSD,
    cUNI,
    cUSDC,
    cUSDP,
    cUSDT,
    cWBTC,
    cWBTC2,
    cYFI,
    cZRX,
    COMPOUND_MARKETS
}
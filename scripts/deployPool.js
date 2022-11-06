const ethers = require("ethers");
const { Framework } = require("@superfluid-finance/sdk-core");
require("dotenv").config();

const stIbAlluoUSD = "0x2efc02e2cdcc1ef699f4af7e98b20f8a2a30923d"; //StIbAlluoUSD on mumbai
const USDC = "0xd751A2717010072E7fc06179bC209ae886eB704f";

async function main() {
  const url = `${process.env.MUMBAI_RPC}`;
  const customHttpProvider = new ethers.providers.JsonRpcProvider(url);

  const network = await customHttpProvider.getNetwork();

  const sf = await Framework.create({
    chainId: network.chainId,
    provider: customHttpProvider,
  });

  const deployer = sf.createSigner({
    privateKey: process.env.DEPLOYER_PRIVATE_KEY, // deployer here doesn't matter much
    provider: customHttpProvider,
  });

  console.log("running deploy script...");
  // We get the contract to deploy
  const Pool = await hre.ethers.getContractFactory("LiquidityPool");
  const pool = await Pool.connect(deployer).deploy(USDC, stIbAlluoUSD, 10);

  await pool.deployed();

  //NOTE: you will need this address to run other scripts, so we recommend getting it from the console
  console.log("LiquidityPool.sol deployed to:", pool.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

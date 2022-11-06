const ethers = require("ethers");
const { Framework } = require("@superfluid-finance/sdk-core");
require("dotenv").config();

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

  const daix = await sf.loadSuperToken("fDAIx");

  console.log("running deploy script...");
  // We get the contract to deploy
  const LoanFactory = await hre.ethers.getContractFactory("LoanFactory");
  const loanFactory = await LoanFactory.connect(deployer).deploy();

  await loanFactory.deployed();

  //NOTE: you will need this address to run other scripts, so we recommend getting it from the console
  console.log("LoanFactory.sol deployed to:", loanFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const ethers = require("ethers");
const { Framework } = require("@superfluid-finance/sdk-core");
const LoanFactoryABI =
  require("../artifacts/contracts/LoanFactory.sol/LoanFactory.json").abi;
require("dotenv").config();

//place deployed address of the loan factory here...
const LoanFactoryAddress = "0x56e173518E9Cf3778aAC908399836014873bF182";

//NOTE: this is set as the goerli url, but can be changed to reflect your RPC URL and network of choice
const url = process.env.GOERLI_URL;

const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
const stIbAlluoUSD = "0x2efc02e2cdcc1ef699f4af7e98b20f8a2a30923d"; //StIbAlluoUSD on mumbai

async function main() {
  const network = await customHttpProvider.getNetwork();

  const sf = await Framework.create({
    chainId: network.chainId,
    provider: customHttpProvider,
  });

  const borrower = sf.createSigner({
    privateKey: process.env.BORROWER_PRIVATE_KEY,
    provider: customHttpProvider,
  });

  const employer = sf.createSigner({
    privateKey: process.env.EMPLOYER_PRIVATE_KEY,
    provider: customHttpProvider,
  });

  const loanFactory = new ethers.Contract(
    LoanFactoryAddress,
    LoanFactoryABI,
    customHttpProvider
  );

  await loanFactory
    .connect(borrower)
    .createNewLoan(
      ethers.utils.parseEther("10"), //borrow amount = 1000 dai
      30, //24 days payback period
      employer.address, //address of employer who will be effectively whitelisted in this case
      borrower.address, // address of borrower
      stIbAlluoUSD.address, //StIbAlluoUSD address - this is the token used for the stream payment
      sf.settings.config.hostAddress //address of host
    )
    .then((tx) => {
      console.log("deployment successful! here is your tx hash: ", tx.hash);
    });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

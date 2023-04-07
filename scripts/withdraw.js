const { getNamedAccounts } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const fundeMe = await ethers.getContract("FundMe", deployer);
  console.log("Withdrawing.. ");
  const transactionResponse = await fundeMe.withdraw();
  await transactionResponse.wait(1);

  console.log("Withdrawn !");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

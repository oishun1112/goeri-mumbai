import { ethers } from "hardhat";

async function main() {
  const L1Token = await ethers.getContractFactory("L1Token");
  const l1 = await L1Token.deploy();

  await l1.deployed();

  console.log("l1 deployed to:", l1.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

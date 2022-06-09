import { ethers } from "hardhat";

async function main() {
  const ChildeChainManagerProxy = "0xb5505a6d998549090530911180f38aC5130101c6";

  const L2Token = await ethers.getContractFactory("L2Token");
  const l2 = await L2Token.deploy(ChildeChainManagerProxy);

  await l2.deployed();

  console.log("l2 deployed to:", l2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

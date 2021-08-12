import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { Token, Token__factory } from "../../typechain";

task("deploy:Token").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const tokenFactory: Token__factory = await ethers.getContractFactory("Token");
  const token: Token = <Token>await tokenFactory.deploy();
  await token.deployed();
  console.log("Token deployed to: ", token.address);
});

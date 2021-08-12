import hre from "hardhat";
import { Artifact } from "hardhat/types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";

import { Token } from "../../typechain/Token";
import { Signers } from "../types";

const { deployContract } = hre.waffle;

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await hre.ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Token", function () {
    beforeEach(async function () {
      const tokenArtifact: Artifact = await hre.artifacts.readArtifact("Token");
      this.token = <Token>await deployContract(this.signers.admin, tokenArtifact, []);
    });

    it("should have no supply", async function () {
      expect(await this.token.connect(this.signers.admin).totalSupply()).to.equal(0);
    });
  });
});

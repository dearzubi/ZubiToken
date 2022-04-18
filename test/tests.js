const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ZubiToken", function () {

  it("Deployer should have all the token supply", async function () {

    const [owner] = await ethers.getSigners();

    let maxSupply = "1000000";

    const ZubiToken = await ethers.getContractFactory("ZubiToken");
    const zubiToken = await ZubiToken.deploy(maxSupply);
    await zubiToken.deployed();
    await zubiToken.issueToken(maxSupply);

    let balance =  await zubiToken.balanceOf(owner.address);
    balance = balance / 10 ** 18;

    expect(balance.toString()).to.equal(maxSupply);

  });
});

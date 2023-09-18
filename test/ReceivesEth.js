const { ignition, ethers } = require("hardhat");
const { expect } = require("chai");

const ReceivesEthModule = require("../ignition/ReceivesEthModule");

describe("ReceivesEth", () => {
  it("should deploy the contract and send it eth", async () => {
    const { receivesEth } = await ignition.deploy(ReceivesEthModule);

    expect(await ethers.provider.getBalance(receivesEth)).to.equal(
      await receivesEth.amount()
    );
  });
});

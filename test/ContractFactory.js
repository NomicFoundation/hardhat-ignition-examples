const { ignition } = require("hardhat");
const { expect } = require("chai");

const ContractFactoryModule = require("../ignition/ContractFactoryModule");

describe("ContractFactory", () => {
  it("should deploy the contract and increase the factory's nextId", async () => {
    const { factory, deployedWithFactory } = await ignition.deploy(
      ContractFactoryModule
    );

    expect(await deployedWithFactory.id()).to.equal(0);
    expect(await factory.nextId()).to.equal(1);
  });
});

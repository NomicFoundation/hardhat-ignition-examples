const { ignition } = require("hardhat");
const { expect } = require("chai");

const DeploymentPlusInitializationModule = require("../ignition/DeploymentPlusInitializationModule");

describe("DeploymentPlusInitialization", () => {
  it("should deploy the contract and call its initialize function", async () => {
    const { helloWorld } = await ignition.deploy(
      DeploymentPlusInitializationModule
    );

    expect(await helloWorld.message()).to.equal("Hello, world!");
  });
});

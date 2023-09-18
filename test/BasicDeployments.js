const { ignition } = require("hardhat");
const { expect } = require("chai");

// You can require the module and deploy it using `hre.ignition.deploy`
const BasicDeploymentsModule = require("../ignition/BasicDeploymentsModule");

describe("BasicDeployments", () => {
  it("should deploy the contracts", async () => {
    // This is how you deploy a module and access its exposed contracts, which
    // are ethers.js contract objects.
    const { helloWorld, wrappedHelloWorld, holaMundo } = await ignition.deploy(
      BasicDeploymentsModule
    );

    expect(await helloWorld.message()).to.equal("Hello, world!");
    expect(await wrappedHelloWorld.message()).to.equal("Hello, world!");
    expect(await holaMundo.message()).to.equal("Hola, mundo!");
  });
});

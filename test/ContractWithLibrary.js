const { ignition } = require("hardhat");
const { expect } = require("chai");

const ContractWithLibraryModule = require("../ignition/ContractWithLibraryModule");

describe("ContractWithLibrary", () => {
  it("should deploy the contract and the library succesfully", async () => {
    const { contractWithLibrary } = await ignition.deploy(
      ContractWithLibraryModule
    );

    expect(await contractWithLibrary.readonlyFunction(1)).to.equal(3);
    expect(await contractWithLibrary.readonlyFunction(3)).to.equal(5);
  });
});

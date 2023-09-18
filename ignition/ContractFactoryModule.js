const { buildModule } = require("@nomicfoundation/hardhat-ignition");

module.exports = buildModule("ContractFactory", (m) => {
  // We deploy the factory first
  const factory = m.contract("Factory");

  // Then call the deploy function
  const deploy = m.call(factory, "deploy");

  // Then we read the address of the deployed contract from an event
  // emitted by deploy()
  const address = m.readEventArgument(deploy, "Deployed", "addr");

  // You can use `contractAt` to get a contract Future for an existing contract
  const deployedWithFactory = m.contractAt("DeployedWithFactory", address);

  return {
    factory,
    deployedWithFactory,
  };
});

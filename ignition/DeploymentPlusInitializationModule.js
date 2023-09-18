const { buildModule } = require("@nomicfoundation/hardhat-ignition");

module.exports = buildModule("DeploymentPlusInitialization", (m) => {
  // Ignition also allows you to run complex intialization logic after deploying
  // your contracts, and perform any kind of operation on them.
  //
  // In this example we first deploy a contract, and then we call its `initialize`
  // function.
  const helloWorld = m.contract("HelloWorldWithInitialize");

  // m.call returns a Future that represents the call to the contract.
  // Ignition won't consider the deployment finished until all the calls
  // have been executed.
  m.call(helloWorld, "initialize", ["Hello, world!"]);

  return {
    helloWorld,
  };
});

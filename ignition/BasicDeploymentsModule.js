const { buildModule } = require("@nomicfoundation/hardhat-ignition");

module.exports = buildModule("BasicDeployments", (m) => {
  // You can deploy a contract by calling the `contract` function
  // and passing its name and constructor params.
  //
  // The contract function returns a Future object, that represents
  // the contract to be deployed.
  //
  // Each Future has unique id, which is used to identify it, which
  // Ignition normally autogenerates based on the contract name.
  const helloWorld = m.contract("HelloWorld", ["Hello, world!"]);

  // You can use Futures as arguments to create other Futures.
  const wrappedHelloWorld = m.contract("WrappedHelloWorld", [helloWorld]);

  // You can also deploy a contract from an artifact
  //
  // In this case, we are deploying two instances of HelloWorld, so the
  // second one requires an explicit id.
  const holaMundo = m.contract(
    "HelloWorld",
    // We require the artifact manually for this example
    require("../artifacts/contracts/BasicDeployments.sol/HelloWorld.json"),
    ["Hola, mundo!"],
    { id: "HolaMundo" }
  );

  // Finally, you can return the contract futures that you want to expose to
  // Ignition, tests, and other modules.
  return {
    helloWorld,
    wrappedHelloWorld,
    holaMundo,
  };
});

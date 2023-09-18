const { buildModule } = require("@nomicfoundation/hardhat-ignition");

module.exports = buildModule("ReceivesEth", (m) => {
  const receivesEth = m.contract("ReceivesEth");

  // You can use `m.send` to send ETH to a contract.
  // The module won't be considered successfully executed until the send
  // is also executed.
  m.send("sendEth", receivesEth, 10n ** 18n);

  return {
    receivesEth,
  };
});

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AleTokenModule", (m) => {
  const initialSupply = m.getParameter("initialSupply", 1_000_000n);

  const aleToken = m.contract("AleToken", [initialSupply]);

  return { aleToken };
});

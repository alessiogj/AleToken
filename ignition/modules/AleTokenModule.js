const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AleTokenModule", (m) => {
  // Parametri del modulo
  const initialSupply = m.getParameter("initialSupply", 1_000_000n);

  // Distribuisci il contratto AleToken
  const aleToken = m.contract("AleToken", [initialSupply]);

  return { aleToken };
});
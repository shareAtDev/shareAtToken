var ShareAt = artifacts.require("./ShareAt.sol");

module.exports = function(deployer) {
  deployer.deploy(ShareAt, "ShareAt", "XAT", 20000000000, 18);
};
const Migrations = artifacts.require("Migrations");
const Insureum = artifacts.require("Insureum");

module.exports = function (deployer) {
  // deployer.deploy(Migrations);
  deployer.deploy(Insureum);
};

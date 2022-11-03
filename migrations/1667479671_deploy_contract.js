const storageContract = artifacts.require('./StorageContract')

module.exports = function (_deployer) {
    _deployer.deploy(storageContract)
};
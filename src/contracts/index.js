import contract from 'truffle-contract'
import storageArtifact from '../../build/contracts/StorageContract.json'

const StorageContract = contract(storageArtifact)

export {
    StorageContract
}
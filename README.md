## The project already deployed:

BUT to ensure that everything is running correctly as expected, first of all
clone this repo locally:

```
git clone https://github.com/vicecitydeluxe/simple-dapp.git
```

Then install all the dependencies needed:

```
npm i
```

Use following command to generate
test accounts/private keys pairs and Mnemonic:

```
truffle develop
```

After that, use your generated Mnemonic (from example given below) to create a new password in Metamask:

```
thank cream laptop fault off asset develop load clerk snow spring onion
```

When you successfully logged in to Metamask,
everything should be OK and would work fine.
You can use the link to check it out:
[Hit the link to check it now!](https://vicecitydeluxe.github.io/simple-dapp/)

# Vue 3 + Vite

This template should help get you
started developing with Vue 3 in Vite.
The template uses Vue 3 `<script setup>` SFCs,
check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Prerequisites

[Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) browser extension
installed. Chrome browser is recommended.

## How to set up the project locally:

Install all dependencies needed

```
npm i
```

Enter development mode

```
vite
```

## Truffle basic commands

Initialize dev mode and generate test accounts/private keys pairs:

```
truffle develop
```

Create a migration:

```
truffle create migration deploy_contract
```

Start migration process:

```
truffle migrate
```

After those steps, copy the code
down below and paste it to the ./migrations/**.js file:

```
const storageContract = artifacts.require('./StorageContract')

module.exports = function (_deployer) {
 _deployer.deploy(storageContract)
 };
```

Then use following command below to create a json contract
schema in ./build/contracts/**.json directory

```
truffle migrate
```

After those steps, login to Metamask using Mnemonic
or create password by yourself.
Next you can "hardcode" value as in example below
to make a payment button alive:

```
const sendETH = () => {
  let transactionParam = {
    /**
     * static Account 1
     */
    to: '',
    from: store.account,
    value: 'DE0B6B3A7640000',
  }
```

Then use app normally.
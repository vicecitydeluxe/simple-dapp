# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs,
check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Prerequisites

[Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) browser extension
installed

## How to set up the project:

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

After those steps, copy the code down below and paste it to the ./migrations/**.js file:

```
const storageContract = artifacts.require('./StorageContract')

module.exports = function (_deployer) {
 _deployer.deploy(storageContract)
 };
```

Then use following command below to create a json contract schema in ./build/contracts/**.json directory

```
truffle migrate
```

import {defineStore} from 'pinia'
import Web3 from 'web3'
import {ref} from "vue";

export const useMainStore = defineStore('main', () => {
    const account = ref('')

    function initWeb3() {
        if (typeof web3 === undefined) {
            window.web3 = new Web3(web3.currentProvider)
        }
    }

    function watchWeb3Account() {
        setInterval(async () => {
            window.ethereum.on('chainChanged', () => console.log('1111'));
            const accounts = await web3.eth.getAccounts()
            const activeAccount = accounts[0]
            if (!activeAccount) return
            if (activeAccount !== account.value) {
                account.value = activeAccount
            }
        }, 500)
    }

    return {account, initWeb3, watchWeb3Account}
})
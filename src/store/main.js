import {defineStore} from 'pinia'
import {ref} from "vue";

export const useMainStore = defineStore('main', () => {
    const account = ref('')
    const balance = ref('')

    function getAccount() {
        setInterval(async () => {
            await window.ethereum.request({method: 'eth_requestAccounts'})
                .then(accounts => {
                    account.value = accounts[0]
                })
        }, 1000)
    }

    function getBalance() {
        setInterval(async () => {
            await window.ethereum.request({method: 'eth_getBalance', params: [account.value, 'latest']})
                .then((res) => {
                    let decoded = parseInt(res, 16)
                    balance.value = decoded / (10 ** 18) + ' ETH'
                })
        }, 500)
    }
    return {
        account, balance,
        getAccount, getBalance
    }
})
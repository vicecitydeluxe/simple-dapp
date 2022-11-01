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
                    console.log(account.value)
                })
        }, 3000)
    }

    function getBalance() {
        setInterval(async () => {
            await window.ethereum.request({method: 'eth_getBalance', params: [account.value, 'latest']})
                .then((res) => {
                    balance.value = res
                    console.log(res)
                })
        }, 3000)

    }

    return {
        /**
         * state
         */
        account, balance,
        /**
         * actions
         */
        getAccount, getBalance
    }
})
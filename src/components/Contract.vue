<script setup>
import {onMounted, watch, ref, computed} from 'vue'
import {useMainStore} from '../store/main'
import {useToast} from "vue-toastification";

const $toast = useToast()
const ETH = window.ethereum
const store = useMainStore()
const metaMaskReady = ref(false)
const colorPicker = ref(0)
const buttonHideFlag = ref(0)
/**
 * 1) https://eth-converter.com/ Ether to WEI
 * 2) https://www.rapidtables.com/convert/number/decimal-to-hex.html
 *    Enter decimal number (WEI)
 * 3) HEX number is what we need in value key
 */
const sendETH = () => {
  let transactionParam = {
    /**
     * static Account 1
     */
    to: '0xfdddd07344eea25c20cb4cedf9543417d5063375',
    from: store.account,
    value: 'DE0B6B3A7640000',
  }
  ETH.request({
    method: 'eth_sendTransaction',
    params: [transactionParam],
  })
      .then((hash) => {
        console.log(hash)
      })
}
const buttonChecker = computed(() => store.account !== '0xfdddd07344eea25c20cb4cedf9543417d5063375' && buttonHideFlag)

onMounted(() => {
  metaMaskReady.value = typeof ETH !== 'undefined'
  store.getAccount()
})

watch(
    () => store.account,
    () => {
      buttonHideFlag.value++
      $toast.success("Account was changed!", {
        position: "top-center",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.5,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
      store.getBalance()
      colorPicker.value++
    }
)

watch(
    () => metaMaskReady.value,
    () => {
      document.querySelectorAll('svg').forEach(e => e.remove())
    }
)
</script>

<template>
  <div v-if="metaMaskReady"><h1 v-if="store.account">Account</h1>
    <h2
        :class="[colorPicker % 2 === 0
        ? 'text-orange-600'
        : 'text-green-600']"
    >{{ store.account }}</h2>
    <h1 v-if="store.balance">Balance</h1>
    <h2
        :class="[colorPicker % 2 === 0
        ? 'text-blue-600'
        : 'text-red-600']"
    >{{ store.balance }}</h2>
  </div>
  <h1 v-else>Please, install the Metamask extension</h1>
  <button
      type="button"
      v-if="buttonChecker"
      @click="sendETH"
      :class="[buttonHideFlag
      ? 'focus:outline-none' +
       ' text-white bg-green-700' +
       ' hover:bg-green-800focus:ring-4' +
       ' focus:ring-green-300 font-medium' +
       ' rounded-lg text-sm  px-5  py-2.5' +
       ' mr-2 mb-2 dark:bg-green-600' +
       ' dark:hover:bg-green-700' +
       ' dark:focus:ring-green-800'
      : 'invisible']"
  >
    Send 1 ETH to Account 1
  </button>
</template>

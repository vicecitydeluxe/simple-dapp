<script setup>
import {onMounted, watch, ref} from 'vue'
import {useMainStore} from '../store/main'

const store = useMainStore()
const metaMaskReady = ref(false)
const colorPicker = ref(0)
onMounted(() => {

  metaMaskReady.value = typeof window.ethereum !== 'undefined'
  store.getAccount()
})

watch(
    () => store.account,
    () => {
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
</template>

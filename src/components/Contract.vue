<script setup>
import {onMounted, watch} from 'vue'
import {useMainStore} from '../store/main'

const store = useMainStore()

onMounted(() => {
  store.getAccount()
})

watch(
    () => store.account,
    () => {
      store.getBalance()
    }
)

</script>

<template>
  <h1 v-if="store.account">Account</h1>
  <h2 class="text-orange-600">{{ store.account }}</h2>
</template>

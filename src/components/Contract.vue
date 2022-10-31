<script setup>
import {ref, onMounted} from 'vue'
import {useMainStore} from '../store/main'

const store = useMainStore()

defineProps({
  msg: String
})
onMounted(() => {

})
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2 class="text-orange-600">{{ store.account }}</h2>
  <div class="flex justify-center">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

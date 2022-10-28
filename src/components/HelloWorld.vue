<script setup>
import {ref} from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="flex justify-center">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

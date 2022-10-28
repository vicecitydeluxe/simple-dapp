<script setup>
import {ref} from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

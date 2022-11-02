<script setup>
import Contract from './components/Contract.vue'
import ModelViewer from '@metamask/logo'

ModelViewer({
  pxNotRatio: true,
  width: 200,
  height: 200,
  followMouse: true,
  slowDrift: true,
})
</script>

<template>
  <div class="flex justify-center">
  </div>
  <Contract/>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,700;1,900&display=swap');
</style>


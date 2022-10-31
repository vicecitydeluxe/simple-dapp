<script setup>
import Contract from './components/Contract.vue'
</script>

<template>
  <div class="flex justify-center">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo"/>
    </a>
  </div>
  <Contract msg="Vite + Vue"/>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
}

</style>

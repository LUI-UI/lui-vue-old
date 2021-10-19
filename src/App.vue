<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import LBadge from './components/Badge/LBadge.vue'
// import { reactive } from 'vue'

// let vars = reactive({
//   size: 'sm',
//   variant: 'success',
// })
// function changeBg() {
//   vars.variant = 'danger'
//   vars.size = 'lg'
// }
</script>

<template>
  <div class="badge-container">
    <LBadge size="xs" variant="primary" />
    <LBadge size="sm" variant="primary" />
    <LBadge size="md" variant="primary" />
    <LBadge size="lg" variant="primary" />
  </div>
  <div class="badge-container variants">
    <LBadge size="lg" variant="primary" />
    <LBadge size="lg" variant="success" :border="true" />
    <LBadge size="lg" variant="danger" />
    <LBadge size="lg" variant="warning" :border="true" />
    <LBadge size="lg" variant="secondary" />
  </div>
  <!-- <LBadge :size="vars.size" :variant="vars.variant" /> -->
  <!-- <button @click="changeBg">TEST</button> -->
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.badge-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 350px;
  padding: 100px;
}

.variants {
  background: cornflowerblue;
}
</style>

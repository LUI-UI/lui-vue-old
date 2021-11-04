<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import LButton from './components/Button/LButton.vue'
// import LBadge from './components/Badge/LBadge.vue'
// import { reactive } from 'vue'
</script>

<template>
  <div class="btn-container">
    <l-button
      type="default"
      variant="primary"
      size="lg"
      rounded-full
    >
      LTEST
    </l-button>
  </div>
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
.btn-container {
  padding: 150px;
}

.badge-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 350px;
  padding: 100px;
}
</style>

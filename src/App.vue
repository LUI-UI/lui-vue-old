<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import LButton from './components/Button/LButton.vue'
// import LIcon from './components/Icon/LIcons.vue'
// import LBadge from './components/Badge/LBadge.vue'
// import { reactive } from 'vue'
</script>

<template>
  <div class="btn-container">
    <l-button
      type="default"
      variant="secondary"
      size="md"
      block
      rounded-full
    >
      LTEST
    </l-button>
    <!-- <hr>
    <div class="color: red;">
      <LIcon
        name="home"
        fill
        class="text-red"
      />
    </div> -->
    <!-- <i class="ri-admin-fill" /> -->
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
  font-size: 16px;
}

.badge-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 350px;
  padding: 100px;
}
</style>

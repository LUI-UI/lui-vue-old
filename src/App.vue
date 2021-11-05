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
    <div>
    <l-button
      type="outline"
      variant="primary"
      size="lg"
    >Sign up</l-button>
    </div>
    <l-button
      type="default"
      variant="primary"
      size="lg"
      icon="home"
    />
    <l-button
      type="outline"
      variant="primary"
      size="sm"
      icon="home"
      class="mt-2"
      rounded-full
    />
    <!-- <l-button
      type="default"
      variant="primary"
      size="lg"
      icon="arrow-right"
    /> -->
    <!-- <l-button
      type="default"
      variant="primary"
      size="lg"
      prefix="home"
    >
      Sign up
    </l-button> -->

    <button class="p-1.5 text-white bg-blue-500 text-xs flex mt-2">
      <i
        class="ri-home-fill text-lg leading-none"
      />
    </button>
    <!-- <button class="tttt">Sign up</button> -->
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
.tttt{
/* position: static;
width: 59px;
height: 24px;
left: 24px;
top: 12px; */

/* Button & Chips Text/Button MD - LG */

font-family: Work Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

display: flex;
align-items: center;
text-align: center;
background-color: blue;
/* Color Theme/LUI White */

color: #FFFFFF;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 24px;
}
</style>

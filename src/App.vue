<script setup>
import LButton from './components/Button/LButton.vue'
import LuiAvatar from './components/Avatar/LAvatar.vue'
</script>

<template>
  <div class="btn-container">
    <div class="mb-8">
      <l-button
        type="default"
        variant="primary"
        darker
        size="md"
        icon="home"
      />
    </div>
    <LuiAvatar
      variant="secondary"
      text="DD"
      :badge="{position:'top', variant:'danger'}"
    />
    <!-- <l-button
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
    /> -->

    <!-- <button class="p-1.5 text-white bg-blue-500 text-xs flex mt-2">
      <i
        class="ri-home-fill text-lg leading-none"
      />
    </button> -->
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

</style>

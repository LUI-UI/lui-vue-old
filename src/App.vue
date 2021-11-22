<script setup>
import LButton from './components/Button/LButton.vue'
import LCard from './components/Card/LuiCard.vue'
import LuiAvatar from './components/Avatar/LAvatar.vue'

const colors = {
  rose: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
  },
}

function hexToRgbA(hex) {
  var c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
  }
  throw new Error('Bad Hex')
}

hexToRgbA('#fbafff')

function changeTheme() {
  Object.keys(colors.rose).forEach((key) => {
    document.documentElement.style.setProperty(`--rose-${key}`, `${hexToRgbA(colors.rose[key])}`)
  })
}
</script>

<template>
  <div class="btn-container">
    <div class="mb-8">
      <!-- <LButton
        type="default"
        variant="primary"
        size="md"
        icon="home"
      >
      </LButton>   -->
      <LCard
        class="w-1/4"
        border
        border-variant="primary"
        rounded
        text-variant="danger"
        text-filter="lighter"
        bg-variant="secondary"
        bg-filter="darker"
      >
        <div class="mb-6">
          <LButton size="lg" icon="home" variant="warning" filter="darker" @click="changeTheme()" />
        </div>
        <h3 class="mb-6">Title test</h3>
        <p class="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, inventore.
        </p>
        <div>
          <LButton class="mr-1" size="sm" variant="primary" filter="darker"> Action 1 </LButton>
          <LButton size="sm"> Action 2 </LButton>
        </div>
      </LCard>
      <LCard
        class="w-1/4"
        border
        border-variant="primary"
        rounded
        text-variant="danger"
        text-filter="lighter"
        bg-variant="white"
        bg-filter="darker"
      >
        <div class="mb-6">
          <LButton size="lg" icon="home" variant="warning" filter="darker" />
        </div>
        <h3 class="mb-6">Title test</h3>
        <p class="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, inventore.
        </p>
        <div>
          <LButton class="mr-1" size="sm" variant="primary" filter="darker"> Action 1 </LButton>
          <LButton size="sm"> Action 2 </LButton>
        </div>
      </LCard>
      <LuiAvatar />
      <button @click="changeTheme()">TESTESTES</button>
    </div>
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

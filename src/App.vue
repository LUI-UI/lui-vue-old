<script setup>
import LButton from './components/Button/LButton.vue'

// function hexToRgb(hex) {
//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
//   return result
//     ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
//     : null
// }

// let variables = []

// Object.keys(color).forEach((c) => {
//   for (const [key, value] of Object.entries(color[c])) {
//     if (typeof color[c] === 'object') {
//       if (key !== 'DEFAULT') {
//         variables.push({ key: `--color-${c}-${key}`, value: `${hexToRgb(value)}` })
//       } else {
//         variables.push({ key: `--color-${c}`, value: `${hexToRgb(value)}` })
//       }
//     }
//   }
// })
// console.log(variables)

// variables.forEach((v) => document.documentElement.style.setProperty(v.key, v.value))
</script>

<template>
  <div class="btn-container">
    <div class="mb-8">
      <LButton>TEST</LButton>
      <p class="text-primary mt-7 border border-primary">
        Test
      </p>
      <!-- <LButton
        type="default"
        variant="primary"
        size="md"
        icon="home"
      >
      </LButton>   -->
      <!-- <LCard
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
          <LButton
            size="lg"
            icon="home"
            variant="warning"
            filter="darker"
            @click="changeTheme()"
          />
        </div>
        <h3 class="mb-6">
          Title test
        </h3>
        <p class="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, inventore.
        </p>
        <div>
          <LButton
            class="mr-1"
            size="sm"
            variant="primary"
            filter="darker"
          >
            Action 1
          </LButton>
          <LButton size="sm">
            Action 2
          </LButton>
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
          <LButton
            size="lg"
            icon="home"
            variant="warning"
            filter="darker"
          />
        </div>
        <h3 class="mb-6">
          Title test
        </h3>
        <p class="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, inventore.
        </p>
        <div>
          <LButton
            class="mr-1"
            size="sm"
            variant="primary"
            filter="darker"
          >
            Action 1
          </LButton>
          <LButton size="sm">
            Action 2
          </LButton>
        </div>
      </LCard>
      <LuiAvatar />
      <button @click="changeTheme()">
        TESTESTES
      </button> -->
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

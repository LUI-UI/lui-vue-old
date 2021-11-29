<script>
import LTabs from './components/TabMenu/LuiTabs.vue'
import LTab from './components/TabMenu/LuiTab.vue'
import LuiInput from './components/Input/LuiInput.vue'
import LuiButton from './components/Button/LuiButton.vue'

export default {
  components: { LTabs, LTab, LuiInput, LuiButton },
  // methods: {
  //   handleAction(value) {
  //     console.log('action event', value)
  //   },
  // },
}

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
      <l-tabs>
        <l-tab title="Landing pages">
          Hello from 1
          <LuiInput
            :state="false"
            size="md"
            description="alameti farika"
            :clear="true"
          >
            test
          </LuiInput>
        </l-tab>
        <l-tab title="Tab2">
          Hello from tab 2
          <LuiButton>Buton</LuiButton>
        </l-tab>
        <l-tab title="Tab3">
          Hello from tab 3
        </l-tab>
        <l-tab
          title="Tab4"
          disabled
        >
          Hello from tab 4
        </l-tab>
      </l-tabs>
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
  </div>
</template>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */
#app {
  /* font-family: font-worksans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  /* color: #2c3e50; */
  font-family: 'Work Sans', sans-serif;
  margin-top: 60px;
}
.btn-container {
  /* font-family: 'Work Sans', sans-serif; */
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

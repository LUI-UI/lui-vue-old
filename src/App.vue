<script>
import LuiLink from './components/Link/LuiLink.vue'
// import LuiAccordion from './components/Accordion/LuiAccordion.vue'
// import LuiAccordionGroup from './components/Accordion/LuiAccordionGroup.vue'
export default {
  components: { LuiLink },
  data() {
    return {
      isAcc: true,
    }
  },
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
      <lui-link
        href="https://contentrain.io/" 
        target="_blank"
        size="xl"
        variany="primary"
      >
        link test
      </lui-link>
      <hr>
      <a class="test" href="https://lanista.com.tr/">contentrain!</a>
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
    <!-- <lui-accordion-group>
      <lui-accordion
        title="Accordion 1"
        :active="isAcc"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure perferendis facere sint
        molestias. Dolorem voluptatum eum voluptas repellendus nam magni praesentium! Voluptate quos
        totam aspernatur, dolores porro ipsam fugiat iusto. Iste non adipisci est assumenda
        aspernatur neque exercitationem! Libero maiores laudantium ipsum quo mollitia itaque
        quisquam inventore sit harum.
      </lui-accordion>
      <lui-accordion title="Accordion 2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, repudiandae.
      </lui-accordion>
      <lui-accordion title="Accordion 3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellat, laudantium rem ex
        eaque hic dolore eveniet in consequatur veniam!
      </lui-accordion>
    </lui-accordion-group> -->
  </div>
</template>

<style>
#app {
  margin-top: 60px;
}
.btn-container {
  /* font-family: 'Work Sans', sans-serif; */
  padding: 150px;
}
a.test{
  color: blue;
}
a.test:visited{
  color: red;
}
/* a:visited{
  color:red;
} */
.badge-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 350px;
  padding: 100px;
}
</style>

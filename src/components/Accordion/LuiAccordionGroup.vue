<template>
  <div
    ref="LuiAccordionGroup"
    class="accordionGroup"
  >
    <slot />
  </div>
</template>

<script>
import { provide,ref } from 'vue'
export default {
  setup() {
    let activeTitle = ref(null)
    provide('activeAccordion', activeTitle)
  },
  // setup(props, { slots }) {
  //   let accordions = ref(
  //     slots.default().map((acc) => {
  //       return {
  //         ...acc.props,
  //         content: acc.children.default()[0].children,
  //       }
  //     })
  //   )
  //   console.log(accordions)
  //   const accordionGroup = ref(null)
  //   onMounted(() => {
  //     console.log("ref",accordionGroup.value)
  //     // console.log(el)
  //   })

  //   watch(
  //     () => accordionGroup,
  //     (accGroup) => {
  //       console.log('watch :', accGroup)
  //     }
  //   )

  //   function handleExpanded(title) {
  //     console.log('calisti//', title)
  //   }
  //   // function handleExpanded(title) {
  //   //   const test = accordions.value.map((acc) => {
  //   //     if (acc.title !== title) {
  //   //       return { ...acc, active: false }
  //   //     }
  //   //     return { ...acc, active: true }
  //   //   })
  //   //   accordions.value = test
  //   // }
  //   return {
  //     // accordions,
  //     // handleExpanded,
  //     accordionGroup,
  //     handleExpanded,
  //     accordions,
  //   }
  // },
}
</script>

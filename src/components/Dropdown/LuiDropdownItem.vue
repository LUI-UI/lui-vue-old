<template>
  <li>
    <a
      :class="computedClasses"
      href="#"
      v-bind="$attrs"
    ><slot /></a>
  </li>
</template>
<script>
import { computed } from 'vue'
import { generateClasses } from '../../mixins/methods'
import * as prop from '../../mixins/props'
export default {
  mixins: [prop.boolean('rounded'),prop.boolean('disabled'),prop.variant()],
  inheritAttrs: false,
  setup() {
    const computedClasses = computed(() => {
      const classes = {
        marginLeft: 'ml-2',
        marginRight: 'mr-2',
        marginTop: 'mt-2',
        padding: 'p-2',
        borderRadius: 'rounded-lg',
        cursor: 'cursor-pointer',
        backgroundColor: 'hover:bg-primary-100',
        fontColor: 'text-secondary-600 hover:text-primary',
        display: 'block',
        outline: 'focus:outline-none',
        boxShadow: 'focus:ring-2 focus:ring-primary',
      }
      return generateClasses([{ ...classes }])
    })
    return { computedClasses }
  },
}
</script>

<template>
  <component
    :is="setLevel"
    :class="computedClasses"
  >
    <slot />
  </component>
</template>

<script>
import { computed } from 'vue'
import * as prop from '../../mixins/props'
import { generateClasses } from '../../mixins/methods'
export default {
  mixins: [prop.string('level', '2', ['1', '2', '3', '4', '5', '6']), prop.boolean('display')],
  setup(props) {
    const setLevel = computed(() => {
      return `h${props.level}`
    })
    const computedClasses = computed(() => {
      const classes = {
        textColor: 'secondary-600',
        fontWeight: '400',
        // level 4 te leading tasarimda 23, bizde 24
        // level 5 te 25 biz de  24
        // level 2 de 30 biz de
        // level 1 tasarimda 38 biz de 36
        fontSize:
          props.display === false
            ? props.level === '6'
              ? 'text-sm leading-4.5'
              : props.level === '5'
              ? 'text-base leading-5'
              : props.level === '4'
              ? 'text-lg leading-6'
              : props.level === '3'
              ? 'text-xl leading-6' 
              : props.level === '2'
              ? 'text-2xl leading-8'
              : 'text-3xl leading-9'
            : props.display === true // display true
            ? props.level === '6'
              ? 'text-4xl'
              : props.level === '5'
              ? 'text-5xl'
              : props.level === '4'
              ? 'text-6xl'
              : props.level === '3'
              ? 'text-7xl'
              : props.level === '2'
              ? 'text-8xl'
              : 'text-9xl'
            : '',
      }
      return generateClasses([{...classes}])
    })
    return { setLevel, computedClasses }
  },
}
</script>

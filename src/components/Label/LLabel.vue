<template>
  <label
    v-bind="$attrs"
    :class="classes"
  >
    <slot />
  </label>
</template>

<script>
import { computed } from 'vue'
export default {
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'sm',
      validator(value){
        return ['sm','lg'].includes(value)
      }
    }
  },
  setup(props) {
    // const classes = 'inline-block text-secondary-600 text-xs leading-4.5 mb-1';
    const classes = computed(() => {
      return {
        display: 'inline-block',
        margin: 'mb-1',
        fontColor: 'text-secondary-600',
        fontSize: props.size === 'sm' ? 'text-xs' : 'text-sm',
        lineHeight: props.size === 'sm' ? 'leading-4.5' : ''
      }
    })
    const test = {...classes.value}
    console.log("TEST : ",test)
    return { classes }
  },
}
</script>

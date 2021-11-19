<template>
  <label
    v-bind="$attrs"
    :class="classes"
  >
    <slot />
  </label>
</template>

<script>
import { generateClasses } from '../../mixins/methods'
import { computed } from 'vue'
export default {
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'sm',
      validator(value) {
        return ['sm', 'lg'].includes(value)
      },
    },
  },
  setup(props) {
    const classes = computed(() => {
      const styles = {
        display: 'inline-block',
        margin: 'mb-1',
        fontColor: 'text-secondary-600',
        fontSize: props.size === 'sm' ? 'text-xs' : 'text-sm',
        lineHeight: props.size === 'sm' ? 'leading-4.5' : '',
      }
      return generateClasses([{ ...styles }])
    })
    return { classes }
  },
}
</script>

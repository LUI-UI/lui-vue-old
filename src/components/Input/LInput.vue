<template>
  <input
    type="text"
    v-bind="$attrs"
  >
</template>
<script>
import { computed } from 'vue'

export default {
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'sm',
      validator(value) {
        return ['sm', 'md', 'lg'].includes(value)
      },
      state: {
        type: [String, Boolean],
        default: null,
        validator(value) {
          return [null, 'warning', false, true].includes(value)
        },
      },
    },
  },
  setup(props) {
    const classes = computed(() => {
      return {
        padding:
          props.size === 'sm'
            ? 'py-1.5 px-2'
            : props.size === 'md'
            ? 'p-2'
            : 'p-2.5',
        border: 'border-gray-200',
        borderRadius:
          props.size === 'sm'
            ? 'rounded-md'
            : props.size === 'md'
            ? 'rounded-lg'
            : 'rounded-xl',
      }
    })
    console.log(props, classes)
  },
}
</script>

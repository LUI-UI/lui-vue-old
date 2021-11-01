<template>
  <span :class="classes" />
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    size: {
      type: String,
      default: 'sm',
      validator(value) {
        return ['xs', 'sm', 'md', 'lg'].includes(value)
      },
    },
    variant: {
      type: String,
      default: 'theme',
      validator(value) {
        return [
          'primary',
          'success',
          'warning',
          'danger',
          'secondary',
        ].includes(value)
      },
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    function size(size) {
      const sizes = { xs: '2', sm: '3', md: '4', lg: '5' }
      return `w-${sizes[size]} h-${sizes[size]}`
    }
    function bg(color) {
      return `bg-${color}`
    }
    function border(isBordered) {
      return isBordered ? 'border border-white' : ''
    }
    const classes = computed(() => {
      return [
        'inline-block rounded-full',
        `${size(props.size)}`,
        `${bg(props.variant)}`,
        `${border(props.border)}`,
      ]
    })
    return { classes }
  },
}
</script>

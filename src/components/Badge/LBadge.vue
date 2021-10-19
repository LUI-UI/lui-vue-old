<template>
  <span :class="classes" />
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
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
      return ['primary', 'success', 'warning', 'danger', 'secondary'].includes(
        value
      )
    },
  },
  border: {
    type: Boolean,
    default: false,
  },
})
function size(size) {
  const sizes = { xs: '2', sm: '3', md: '4', lg: '5' }
  return `w-${sizes[size]} h-${sizes[size]}`
  // if (size == 'xs') return 'w-2 h-2'
  // if (size == 'sm') return 'w-3 h-3'
  // if (size == 'md') return 'w-4 h-4'
  // if (size == 'lg') return 'w-5 h-5'
}
function bg(color) {
  return `bg-${color}`
  // if (color == 'primary') return 'bg-primary'
  // if (color == 'success') return 'bg-success'
  // if (color == 'warning') return 'bg-warning'
  // if (color == 'danger') return 'bg-danger'
  // if (color == 'secondary') return 'bg-secondary'
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
</script>

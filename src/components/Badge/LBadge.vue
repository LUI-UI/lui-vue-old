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
    const classes = computed(() => {
      const styles = {
        width:
          props.size === 'xs'
            ? 'w-2'
            : props.size === 'sm'
            ? 'w-3'
            : props.size === 'md'
            ? 'w-4'
            : 'w-5',
        height:
          props.size === 'xs'
            ? 'h-2'
            : props.size === 'sm'
            ? 'h-3'
            : props.size === 'md'
            ? 'h-4'
            : 'h-5',
        backgroundColor: `bg-${props.variant}`,
        border: props.border ? 'border border-white' : '',
        display: 'inline-block',
        borderRadius: 'rounded-full'
      }
      return Object.values({ ...styles })
        .join(' ')
        .toString()
        .replace(/\s+/g, ' ')
    })
    console.log(classes.value)
    return { classes }
  },
}
</script>

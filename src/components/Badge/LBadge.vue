<template>
  <span :class="computedClasses" />
</template>

<script>
import { computed } from 'vue'
import { generateClasses } from '../../mixins/methods'
export default {
  props: {
    size: {
      type: String,
      default: 'sm',
      validator(value) {
        return ['2xs', 'xs', 'sm', 'md', 'lg'].includes(value)
      },
    },
    variant: {
      type: String,
      default: 'primary',
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
    const computedClasses = computed(() => {
      const classes = {
        width:
          props.size === '2xs'
            ? 'w-2'
            : props.size === 'xs'
            ? 'w-3'
            : props.size === 'sm'
            ? 'w-4'
            : props.size === 'md'
            ? 'w-5'
            : 'w-6',
        height:
          props.size === '2xs'
            ? 'h-2'
            : props.size === 'xs'
            ? 'h-3'
            : props.size === 'sm'
            ? 'h-4'
            : props.size === 'md'
            ? 'h-5'
            : 'h-6',
        backgroundColor: `bg-${props.variant}`,
        border: props.border ? 'border border-white' : '',
        display: 'inline-block',
        borderRadius: 'rounded-full'
      }
      return generateClasses([{...classes}])
    })
    return { computedClasses }
  },
}
</script>

<template>
  <button
    :class="classes"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot />
  </button>
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
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'secondary',
          'info',
          'success',
          'warning',
          'danger',
        ].includes(value)
      },
    },
    block: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'text', 'outline', 'link'].includes(value)
      },
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    roundedFull: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: String,
      default: 'none',
      validator(value) {
        return ['darker', 'lighter', 'none'].includes(value)
      },
    },
  },
  emits: ['click'],
  setup(props) {
    function types(type, variant) {
      if (type === 'default') return `text-white bg-${variant}`
      if (type === 'outline')
        return `text-${variant} bg-white border border-solid border-${variant}`
      if (type === 'text') return `bg-transparent border-none text-${variant}`
      if (type === 'link') return `text-${variant} underline p-0`
    }
    function states(type, variant) {
      let classes
      if (type === 'default') {
        classes = {
          hover: `hover:bg-${variant}-50 hover:text-${variant}`,
          focus: `focus:outline-none focus:ring-2 focus:ring-${variant} ring-offset-2`,
          // active: `${variant}-600 text-white border-none`,
          disabled: 'disabled:bg-secondary-300 disabled:text-white',
        }
      }
      if (type === 'outline') {
        classes = {
          hover: `hover:bg-${variant}-50 hover:border-${variant}-50`,
          focus: `focus:outline-none focus:ring-2 focus:ring-${variant} ring-offset-2`,
          // active: `focus:border-2 focus:border-dashed`,
          disabled: `disabled:border-secondary-300 disabled:bg-secondary-100 disabled:text-secondary-300`,
        }
      }
      if (type === 'text') {
        classes = {
          hover: `hover:bg-${variant}-50`,
          focus: `outline-none focus:ring-2 focus:ring-${variant} ring-offset-2`,
          // active: `active:text-${variant}-600 active:bg-${variant}-50`,
          disabled: `disabled:text-secondary-300 disabled:bg-white`,
        }
        // return Object.values(classes).join(" ").toString()
      }
      if (type === 'link') {
        classes = {
          hover: `hover:text-${variant}-400`,
          focus: `outline-none focus:ring-2 focus:ring-${variant} ring-offset-2`,
          // active: `text-${variant}-600`,
          disabled: `disabled:text-secondary-300`,
        }
        // return Object.values(classes).join(" ").toString()
      }
      return Object.values(classes).join(' ').toString()
    }
    // function filter(filter, variant) {
    //   if (filter === 'darker') return `bg-${variant}-900`
    //   if (filter === 'lighter') return `bg-${variant}-50`
    // }
    const classes = computed(() => {
      let styles = {
        type: types(props.type, props.variant),
        state: states(props.type, props.variant),
        size: props.type === 'link' ? 'p-0' : props.size === 'sm' ? 'px-3 py-1.5' : props.size === 'md' ? 'px-4 py-2' : 'px-6 py-3',
        rounded: !props.rounded || props.type === 'link' || props.type === 'text' ? '' : `rounded-${props.size}`,
        roundedFull: !props.roundedFull || props.type === 'link' || props.type === 'text' ? '' : 'rounded-full',
        font: props.size === 'sm' ? 'text-sm leading-4.5' : 'text-base leading-6',
        block: !props.block || props.type === 'link' ? '' : 'w-full',
      }
      return Object.values(styles).join(' ').toString().replace(/\s+/g, ' ')
    })
    return { classes }
  },
}
</script>

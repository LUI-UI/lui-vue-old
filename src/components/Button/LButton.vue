<template>
  <button
    :class="classes"
    class="flex font-worksans"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <l-icon
      v-if="prefix !== 'none'"
      :name="prefix"
      fill
      class="mr-3"
    />
    <slot />
    <l-icon
      v-if="isIcon"
      :name="icon"
      fill
      :class="iconClasses"
    />
  </button>
</template>
<script>
import { computed } from 'vue'
import LIcon from '../Icon/LIcon.vue'
export default {
  components: {
    LIcon,
  },
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
    icon: {
      type: String,
      default: 'none',
    },
    prefix: {
      type: String,
      default: 'none',
    },
    
  },
  emits: ['click'],
  setup(props) {
    function types(type, variant) {
      if (type === 'default') return `text-white bg-${variant}`
      if (type === 'outline')
        return `text-${variant} bg-white border border-solid border-${variant}`
      if (type === 'text') return `bg-transparent border-none text-${variant}`
      if (type === 'link') return `text-${variant} underline`
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
    function sizes(type, size, icon) {
      if (type === 'link') return 'p-0'
      if (icon) {
        if (size === 'sm') return 'p-1.5'
        if (size === 'md') return 'p-2.5'
        if (size === 'lg') return 'p-3'
      }
      if (size === 'sm') return 'px-3 py-1.5'
      if (size === 'md') return 'px-4 py-2'
      if (size === 'lg') return 'px-6 py-3'
    }
    function fonts(size, isIcon) {
      if (isIcon) {
        if (size === 'sm') return 'text-xs'
        if (size === 'md') return 'text-xl leading-5'
        if (size === 'lg') return 'text-2xl leading-6'
      }
      if (size === 'sm') return 'text-xs leading-4.5'
      return 'text-base leading-6 font-medium'
    }
    // function filter(filter, variant) {
    //   if (filter === 'darker') return `bg-${variant}-900`
    //   if (filter === 'lighter') return `bg-${variant}-50`
    // }
    const isIcon = computed(() => {
      return props.icon !== 'none'
    })
    const iconClasses = computed(() => {
      return isIcon.value && props.size === 'sm' ? 'text-lg leading-none' : ''
    })
    const classes = computed(() => {
      let styles = {
        type: types(props.type, props.variant),
        state: states(props.type, props.variant),
        size: sizes(props.type, props.size, isIcon.value),
        font: fonts(props.size, isIcon.value),
        rounded:
          !props.rounded || props.type === 'link' || props.type === 'text'
            ? ''
            : `rounded-${props.size}`,
        roundedFull:
          !props.roundedFull || props.type === 'link' || props.type === 'text'
            ? ''
            : 'rounded-full',
        block: !props.block || props.type === 'link' ? '' : 'w-full',
      }
      return Object.values(styles).join(' ').toString().replace(/\s+/g, ' ')
    })
    return { classes, isIcon, iconClasses }
  },
}
</script>

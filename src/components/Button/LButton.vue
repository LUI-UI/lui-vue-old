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
    function sizes(size, type) {
      // sm: x:12 y:6
      // md: x:16 y:8
      // lg: x:24 y:12
      // p-1.5 = 6px
      // p-2 = 8px
      // p-3 = 12px
      // p-4 = 16px
      // p-6 = 24px
      if (type === 'link') return 'p-0'
      if (size === 'sm') return 'px-3 py-1.5'
      if (size === 'md') return 'px-4 py-2'
      if (size === 'lg') return 'px-6 py-3'
    }
    function block(is, type) {
      if (!is) return ''
      if (type === 'link') return ''
      return 'w-full'
    }
    function rounded(is, size, type) {
      // sm: 6px = rounded-sm
      // md: 8px = rounded-md
      // lg: 10px = rounded-lg
      if (!is) return ''
      if (type === 'link' || type === 'text') return ''
      return `rounded-${size}`
    }
    function roundedFull(is, type) {
      if (!is) return ''
      if (type === 'link' || type === 'text') return ''
      return 'rounded-full'
    }
    // function filter(filter, variant) {
    //   if (filter === 'darker') return `bg-${variant}-900`
    //   if (filter === 'lighter') return `bg-${variant}-50`
    // }
    function font(size) {
      // sm: fw: 500, size: 12px = text-xs, leading-4.5: 18px
      // md: fw: 500, size: 16px, lh: 24px
      // lg: fw: 500, size: 16px, leading-6: 24px
      if (size === 'sm') return 'text-sm leading-4.5' // line heigtler kontrol edilecek
      if (size === 'md' || size === 'lg') return 'text-base leading-6'
    }
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
    const classes = computed(() => {
      return [
        `${states(props.type, props.variant)}
         ${sizes(props.size, props.type)}
         ${types(props.type, props.variant)} 
         ${font(props.size)} 
         ${block(props.block, props.type)} 
         ${rounded(props.rounded, props.size, props.type)} 
         ${roundedFull(props.roundedFull, props.type)}
          
        `,
      ]
    })
    // const classTest = computed(() => {
    //   return {
    //     sizes: sizes(props.size),
    //     types: types(props.type, props.variant),
    //     font: font(props.size),
    //     block: block(props.block),
    //     rounded: rounded(props.rounded, props.size),
    //     roundedFull: rounded(props.roundedFull),
    //   }
    // })
    // console.log(filter, borderColor, textColor, bgColor, states, variant)
    return { classes }
  },
}
</script>

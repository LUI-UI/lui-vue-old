<template>
  <button
    :class="[classes, stateClasses]"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <l-icon
      v-if="prefix !== 'none'"
      :name="prefix"
      fill
      :size="' '"
      :class="iconClasses"
    />
    <slot />
    <l-icon
      v-if="icon !== 'none'"
      :name="icon"
      fill
      :size="' '"
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
        return ['darker', 'darker', 'none'].includes(value)
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
  setup(props, context) {
    const typeClasses = computed(() => {
      const padding =
        props.icon !== 'none' && !context.slots.default
          ? props.size === 'lg'
            ? 'p-3'
            : props.size === 'md'
            ? 'p-2.5'
            : 'p-1.5'
          : props.type === 'link'
          ? 'p-0'
          : props.size === 'sm'
          ? 'px-3 py-1.5'
          : props.size === 'md'
          ? 'px-4 py-2'
          : 'px-6 py-3'
      return {
        backgroundColor:
          props.type === 'default'
            ? props.filter === 'none'
              ? `bg-${props.variant}`
              : props.filter === 'darker'
              ? `bg-${props.variant}-800`
              : `bg-${props.variant}-50`
            : '',
        fontColor:
          props.filter === 'none'
            ? props.type === 'default'
              ? 'text-white'
              : `text-${props.variant}`
            : props.filter === 'darker'
            ? props.type === 'default'
              ? 'text-white'
              : `text-${props.variant}-800`
            : props.type === 'default'
            ? `text-${props.variant}`
            : `text-${props.variant}-50`,
        fontSize: props.size === 'sm' ? 'text-xs leading-4.5' : 'text-base',
        border:
          props.type === 'outline'
            ? props.filter === 'none'
              ? `outline outline-${props.variant}`
              : props.filter === 'darker'
              ? `outline outline-${props.variant}-800`
              : `outline outline-${props.variant}-50`
            : '',
        borderBottom:
          props.type === 'link'
            ? props.filter === 'darker'
              ? `border-b border-${props.variant}-800`
              : props.filter === 'lighter'
              ? `border-b border-${props.variant}-100`
              : `border-b border-${props.variant}`
            : '',
        // props.type === 'link' ? `border-b border-${props.variant}` : '',
        borderRadius:
          props.type !== 'link' && (props.rounded || props.roundedFull)
            ? props.rounded
              ? `rounded-${props.size}`
              : 'rounded-full'
            : '',
        width: !props.block || props.type === 'link' ? '' : 'w-full',
        padding,
        display: props.prefix !== 'none' || props.icon !== 'none' ? 'flex' : '',
        justifyContent: props.prefix !== 'none' || props.icon !== 'none' ? 'justify-center' : '',
        alignItems: props.prefix !== 'none' || props.icon !== 'none' ? 'items-center' : '',
      }
    })
    const stateClasses = computed(() => {
      const styles = {
        hover: {
          backgroundColor:
            props.type !== 'link'
              ? props.filter === 'lighter'
                ? `hover:bg-${props.variant}`
                : `hover:bg-${props.variant}-50`
              : '',
          // props.type !== 'link' ? `hover:bg-${props.variant}-50` : '',
          fontColor:
            props.filter === 'darker'
              ? props.type === 'default'
                ? `hover:text-${props.variant}-800`
                : props.type === 'link'
                ? `hover:text-${props.variant}-700`
                : ''
              : props.filter === 'lighter' // lighter
              ? props.type === 'default'
                ? 'hover:text-white'
                : props.type === 'link'
                ? `hover:text-${props.variant}-100`
                : ''
              : props.type === 'default'
              ? `hover:text-${props.variant}`
              : props.type === 'link'
              ? `hover:text-${props.variant}-400`
              : '',
          borderColor:
            props.type === 'outline'
              ? props.filter === 'darker'
                ? `hover:outline-${props.variant}-800`
                : `hover:outline-${props.variant}-100`
              : '',
          // props.type === 'outline' ? `hover:outline-none` : '',
        },
        disabled: {
          backgroundColor:
            props.type === 'default' ? 'disabled:bg-secondary-300' : '',
          fontColor: props.type === 'default' ? 'disabled:text-white' : '',
          borderColor: 'disabled:border-secondary-300',
        },
        focus: {
          outline: props.type !== 'outline' ? 'focus:outline-none' : '',
          boxShadow:
            props.filter === 'darker'
              ? `focus:ring-2 focus:ring-${props.variant}-800 focus:ring-offset-2`
              : props.filter === 'lighter'
              ? `focus:ring-2 focus:ring-${props.variant}-100 focus:ring-offset-2`
              : `focus:ring-2 focus:ring-${props.variant} focus:ring-offset-2`,
        },
      }
      const { disabled, focus, hover } = styles
      return Object.values({ ...disabled, ...focus, ...hover })
        .join(' ')
        .toString()
        .replace(/\s+/g, ' ')
    })

    const iconClasses = computed(() => {
      const styles = {
        fontSize:
          props.size === 'sm'
            ? 'text-base'
            : props.size === 'md'
            ? 'text-xl'
            : 'text-2xl',
        prefixMargin:
          props.prefix !== 'none'
            ? props.size === 'sm'
              ? 'mr-1.5 -ml-0.5'
              : 'mr-2 -ml-1'
            : '',
        suffixMargin:
          props.icon !== 'none' && !!context.slots.default
            ? props.size === 'sm'
              ? 'ml-1.5 -mr-0.5'
              : 'ml-2 -mr-1'
            : '',
        lineHeight: props.size === 'lg' ? 'leading-5' : 'leading-none',
      }
      // `${styles.lineHeight} ${styles.prefixMargin} ${styles.suffixMargin} ${styles.fontSize}`,
      return Object.values({ ...styles })
        .join(' ')
        .toString()
        .replace(/\s+/g, ' ')
      // {
      //   classes: Object.values({ ...styles })
      //     .join(' ')
      //     .toString()
      //     .replace(/\s+/g, ' '),
      //   size: '',
      // }
    })

    // console.log('iconClasses', iconClasses.value)

    const classes = computed(() => {
      return Object.values({
        ...typeClasses.value,
      })
        .join(' ')
        .toString()
        .replace(/\s+/g, ' ')
    })
    return { classes, iconClasses, stateClasses }
  },
}
</script>

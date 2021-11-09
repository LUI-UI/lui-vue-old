<template>
  <button
    :class="[classes, stateClasses]"
    class="flex font-worksans"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <l-icon
      v-if="prefix !== 'none'"
      :name="prefix"
      fill
      :size="iconClasses.size"
      :class="iconClasses.classes"
    />
    <slot />
    <l-icon
      v-if="icon !== 'none'"
      :name="icon"
      fill
      :size="iconClasses.size"
      :class="iconClasses.classes"
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
              : `text-${props.variant}-900`
            : props.type === 'default'
            ? `text-${props.variant}`
            : `text-${props.variant}-50`,
        fontSize: props.size === 'sm' ? 'text-xs leading-4.5' : 'text-base',
        border:
          props.type === 'outline'
            ? props.filter === 'none'
              ? `outline outline-${props.variant}`
              : props.filter === 'darker'
              ? `outline outline-${props.variant}-900`
              : `outline outline-${props.variant}-50`
            : '',
        borderBottom:
          props.type === 'link' ? `border-b border-${props.variant}` : '',
        borderRadius:
          props.type !== 'link' && (props.rounded || props.roundedFull)
            ? props.rounded
              ? `rounded-${props.size}`
              : 'rounded-full'
            : '',
        width: !props.block || props.type === 'link' ? '' : 'w-full',
        padding,
      }
    })
    const stateClasses = computed(() => {
      const styles = {
        hover: {
          backgroundColor:
            props.type !== 'link' ? `hover:bg-${props.variant}-50` : '',
          fontColor:
            props.type === 'default'
              ? `hover:text-${props.variant}`
              : props.type === 'text'
              ? `hover:bg-${props.variant}-50`
              : '',
          borderColor: props.type === 'outline' ? `hover:outline-none` : '',
        },
        disabled: {
          backgroundColor:
            props.type === 'default' ? 'disabled:bg-secondary-300' : '',
          fontColor: props.type === 'default' ? 'disabled:text-white' : '',
          borderColor: 'disabled:border-secondary-300',
        },
        focus: {
          outline: props.type !== 'outline' ? 'focus:outline-none' : '',
          boxShadow: `focus:ring-2 focus:ring-${props.variant} ring-offset-2`,
        },
      }
      const { disabled, focus, hover } = styles
      return Object.values({ ...disabled, ...focus, ...hover })
        .join(' ')
        .toString()
        .replace(/\s+/g, ' ')
    })

    const iconClasses = computed(() => {
      let styles = {
        fontSize:
          props.size === 'sm'
            ? 'text-lg'
            : props.size === 'md'
            ? 'text-xl'
            : '',
        size: props.size === 'lg' ? 'xl' : '',
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
        lineHeight: 'leading-none',
      }
      return {
        classes: `${styles.lineHeight} ${styles.prefixMargin} ${styles.suffixMargin} ${styles.fontSize}`,
        size: styles.size,
      }
    })

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

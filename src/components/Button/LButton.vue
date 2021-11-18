<template>
  <button
    :class="[computedClasses]"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <l-icon
      v-if="prefix !== 'none'"
      :name="prefix"
      fill
      :class="iconClasses"
    />
    <span
      v-if="prefix !== 'none' && icon !== 'none'"
      :class="size === 'sm' ? 'mx-1.5' : 'mx-2.5'"
    >
      <slot />
    </span>
    <slot v-else />
    <l-icon
      v-if="icon !== 'none'"
      :name="icon"
      fill
      :class="iconClasses"
    />
  </button>
</template>
<script>
import { computed } from 'vue'
import LIcon from '../Icon/LIcon.vue'
import { generateClasses, generateVariant } from '../../mixins/methods'
import {
  variant,
  rounded,
  roundedFull,
  filter,
  block,
} from '../../mixins/props'
export default {
  components: {
    LIcon,
  },
  mixins: [variant, rounded, roundedFull, filter, block],
  inheritAttrs: false,
  props: {
   size: {
        type: String,
        default: 'md',
        validator(value) {
          return ['sm', 'md', 'lg'].includes(value)
        },
      },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'text', 'outline', 'link'].includes(value)
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
    const computedClasses = computed(() => {
      const classes = {
        padding:
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
            : 'px-6 py-3',
        backgroundColor:
          props.type === 'default'
            ? generateVariant(props.variant, props.filter).backgroundColor
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
        borderRadius:
          props.type !== 'link' && (props.rounded || props.roundedFull)
            ? props.rounded
              ? `rounded-${props.size}` 
              : props.roundedFull ? 'rounded-full' : ''
             : '',
        width: !props.block || props.type === 'link' ? '' : 'w-full',
        display: props.prefix !== 'none' || props.icon !== 'none' ? 'flex' : '',
        justifyContent:
          props.prefix !== 'none' || props.icon !== 'none'
            ? 'justify-center'
            : '',
        alignItems:
          props.prefix !== 'none' || props.icon !== 'none'
            ? 'items-center'
            : '',
      }
      const stateClasses = {
        hover: {
          backgroundColor:
            props.type !== 'link'
              ? props.filter === 'lighter'
                ? `hover:bg-${props.variant}`
                : `hover:bg-${props.variant}-50`
              : '',
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
      const { disabled, focus, hover } = stateClasses
      return generateClasses([
        { ...classes },
        { ...disabled },
        { ...focus },
        { ...hover },
      ])
    })
    const iconClasses = computed(() => {
      const classes = {
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

      return generateClasses([{ ...classes }])
    })

    return { computedClasses, iconClasses }
  },
}
</script>

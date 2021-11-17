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
import { generateClasses } from '../../mixins/methods'
import { variant, rounded, roundedFull, filter, block } from '../../mixins/props'
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
        return ['default', 'text', 'outline', 'link', 'link-underline'].includes(value)
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
            : props.type === 'link' || props.type === 'link-underline'
            ? 'p-0'
            : props.size === 'sm'
            ? 'px-3 py-1.5'
            : props.size === 'md'
            ? 'px-4 py-2'
            : 'px-6 py-3',
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
        borderWidth: props.type === 'outline' || props.type === 'default' ? 'border' : '',
        borderStyle: props.type === 'outline' || props.type === 'default' ? 'border-solid' : '',
        borderColor:
          props.type === 'outline' || props.type === 'default'
            ? props.filter === 'none'
              ? `border-${props.variant}`
              : props.filter === 'darker'
              ? `border-${props.variant}-800`
              : `border-${props.variant}-50`
            : '',
        borderBottom:
          props.type === 'link-underline'
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
              : props.roundedFull
              ? 'rounded-full'
              : ''
            : '',
        width: !props.block || props.type === 'link' ? '' : 'w-full',
        display: props.prefix !== 'none' || props.icon !== 'none' ? 'flex' : '',
        justifyContent: props.prefix !== 'none' || props.icon !== 'none' ? 'justify-center' : '',
        alignItems: props.prefix !== 'none' || props.icon !== 'none' ? 'items-center' : '',
      }
      const stateClasses = {
        hover: {
          backgroundColor:
            props.type === 'link' || props.type === 'link-underline'
            ? ''
            : props.type === 'outline'
            ? props.filter === 'darker'
            ? `hover:bg-${props.variant}-800`
            : props.filter === 'lighter'
            ? `hover:bg-${props.variant}-50`
            : `hover:bg-${props.variant}`
            : props.filter === 'lighter' //def,text
            ? `hover:bg-${props.variant}`
            : `hover:bg-${props.variant}-50`,
          fontColor:

            props.type === 'default'
            ? props.filter === 'none'
            ? `hover:text-${props.variant}`
            : props.filter === 'darker'
            ? `hover:text-${props.variant}`
            : 'hover:text-white'
            : props.type !== 'outline'
            ? props.filter === 'none'
            ? `hover:text-${props.variant}--400` 
            : props.filter === 'darker'
            ? `hover:text-${props.variant}--700`
            : `hover:text-${props.variant}--200` // lighter
            : 'hover:text-white', // outline
          borderColor:
            props.type === 'outline'
              ? props.filter === 'darker'
                ? `hover:border-${props.variant}-800`
                : `hover:border-${props.variant}-50`
              : props.type === 'default'
              ? `hover:border-${props.variant}-50`
              : '',
        },
        disabled: {
          backgroundColor: props.type === 'default' ? 'disabled:bg-secondary-300' : '',
          fontColor: props.type === 'default' ? 'disabled:text-white' : '',
          borderColor: 'disabled:border-secondary-300',
        },
        focus: {
          outline: 'focus:outline-none',
          boxShadow:
            props.filter === 'darker'
              ? `focus:ring-2 focus:ring-${props.variant}-800 focus:ring-offset-2`
              : props.filter === 'lighter'
              ? `focus:ring-2 focus:ring-${props.variant}-100 focus:ring-offset-2`
              : `focus:ring-2 focus:ring-${props.variant} focus:ring-offset-2`,
        },
      }
      const { disabled, focus, hover } = stateClasses
      return generateClasses([{ ...classes }, { ...disabled }, { ...focus }, { ...hover }])
    })
    const iconClasses = computed(() => {
      const classes = {
        fontSize: props.size === 'sm' ? 'text-base' : props.size === 'md' ? 'text-xl' : 'text-2xl',
        prefixMargin:
          props.prefix !== 'none' ? (props.size === 'sm' ? 'mr-1.5 -ml-0.5' : 'mr-2 -ml-1') : '',
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

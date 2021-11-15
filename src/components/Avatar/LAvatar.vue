<template>
  <div
    :class="[computedClasses]"
    class=" text"
    @click="$emit('click')"
  >
    <span>
      <l-icon
        v-if="icon !== 'none'"
        :name="prefix"
        fill
        :class="iconClasses"
      />
    </span>
    <span>
      {{ text.toUpperCase() }}
    </span>
  </div>
</template>
<script>
import { computed } from 'vue'
import LIcon from '../Icon/LIcon.vue'
import { generateClasses } from '../../mixins/methods'
import { variant, rounded, roundedFull, filter } from '../../mixins/props'
export default {
  components: {
    LIcon,
  },
  mixins: [variant, rounded, roundedFull, filter],
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['xxs', 'xs', 'sm', 'md', 'xlg'].includes(value)
      },
    },
    icon: {
      type: String,
      default: 'none',
    },
    text: {
      type: String,
      default: '',
      validator(value) {
        return value.length <= 2
      },
    },
    img: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  setup(props, context) {
    const computedClasses = computed(() => {
      const classes = {
        width:
          props.size === 'xxs'
            ? 'w-5'
            : props.size === 'xs'
            ? 'w-6'
            : props.size === 'sm'
            ? 'w-8'
            : props.size === 'md'
            ? 'w-12'
            : props.size === 'lg'
            ? 'w-16'
            : '',
        height:
          props.size === 'xxs'
            ? 'h-5'
            : props.size === 'xs'
            ? 'h-6'
            : props.size === 'sm'
            ? 'h-8'
            : props.size === 'md'
            ? 'h-12'
            : props.size === 'lg'
            ? 'h-16'
            : '',
        display: 'flex',
        justifyContent: 'justify-center',
        alignItems: 'items-center',
        verticalAlign: 'align-middle',
        textAlign: 'text-center',
        borderRadius:props.rounded || props.roundedFull
            ? props.rounded
              ? `rounded-${props.size}` 
              : props.roundedFull ? 'rounded-full' : 'rounded-sm'
             : '', // Border radius alınabilir mixin Computed olarak.
        backgroundColor:
          props.filter === 'none'
            ? `bg-${props.variant}`
            : props.filter === 'darker'
            ? `bg-${props.variant}-800`
            : `bg-${props.variant}-50`,
        fontColor:
          props.filter === 'none'
            ? `text-white`
            : props.filter === 'darker'
            ? `text-${props.variant}-50`
            : `text-${props.variant}-800`,
        fontSize:
          props.size === 'xxs'
            ? 'text-xxs'
            : props.size === 'xs'
            ? 'text-xxs'
            : props.size === 'sm'
            ? 'text-sm'
            : props.size === 'md'
            ? 'text-md'
            : props.size === 'lg'
            ? 'text-xl'
            : '',
        fontWeight: 'font-semibold',
      }
      return generateClasses([{ ...classes }])
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

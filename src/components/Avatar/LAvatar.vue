<template>
  <div
    :class="[computedClasses]"
    class="text"
    @click="$emit('click')"
  >
    <span v-if="icon !== 'none'">
      <l-icon
        :name="icon"
        fill
        :class="iconClasses"
      />
    </span>
    <span v-else>
      {{ text.toUpperCase().slice(0, 2) }}
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
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['border', 'default'].includes(value)
      },
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['2xs', 'xs', 'sm', 'md', 'lg'].includes(value)
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
  setup(props) {
    const computedClasses = computed(() => {
      const classes = {
        width:
          props.size === '2xs'
            ? 'w-5'
            : props.size === 'xs'
            ? 'w-6'
            : props.size === 'sm'
            ? 'w-8'
            : props.size === 'md'
            ? 'w-12'
            : props.size === 'lg'
            ? 'w-16'
            : 'w-12',
        height:
          props.size === '2xs'
            ? 'h-5'
            : props.size === 'xs'
            ? 'h-6'
            : props.size === 'sm'
            ? 'h-8'
            : props.size === 'md'
            ? 'h-12'
            : props.size === 'lg'
            ? 'h-16'
            : 'h-12',
        display: 'flex',
        justifyContent: 'justify-center',
        alignItems: 'items-center',
        verticalAlign: 'align-middle',
        textAlign: 'text-center',
        borderSize: props.type === 'border' ? ['2xs', 'xs', 'sm'].includes(props.size) ? 'border' : 'border-2': '',
        borderStyle: props.type === 'border' ? 'border-solid' : '',
        borderColor: props.type === 'border' ? 'border-white' : '',
        borderRadius: props.roundedFull
          ? 'rounded-full'
          : props.rounded
          ? `rounded-${props.size}`
          : '',
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
          props.size === '2xs'
            ? 'text-2xs'
            : props.size === 'xs'
            ? 'text-2xs'
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
        fontSize: ['2xs','xs'].includes(props.size) ? 'text-2xs' : props.size==='sm' ? 'text-sm': props.size === 'md' ? 'text-xl' : 'text-2xl',
        // lineHeight: props.size === 'lg' ? 'leading-5' : 'leading-none',
      }

      return generateClasses([{ ...classes }])
    })

    return { computedClasses, iconClasses }
  },
}
</script>

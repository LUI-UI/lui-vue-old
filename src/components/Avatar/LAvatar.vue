<template>
  <div
    class="l-avatar"
    :class="[computedClasses]"
    @click="$emit('click')"
  >
    <l-icon
      v-if="icon !== 'none'"
      :name="icon"
      fill
      :class="iconClasses"
    />
    <img
      v-if="img !== ''"
      :src="img"
      :class="imgClasses"
      alt="Lui avatar"
    >
    <span v-else>
      {{ text.toUpperCase().slice(0, 2) }}
    </span>
    <LBadge
      v-if="badge.variant !== '' && badge.position !== ''"
      :class="badgeClasses"
      :variant="badge.variant"
      border
      :size="['2xs', 'xs', 'sm'].includes(size) ? '2xs' : 'xs'"
    />
  </div>
</template>
<script>
import { computed } from 'vue'
import LIcon from '../Icon/LIcon.vue'
import LBadge from '../Badge/LBadge.vue'
import { generateClasses, generateVariant } from '../../mixins/methods'
import { variant, rounded, roundedFull, filter, size, border } from '../../mixins/props'
export default {
  components: {
    LIcon,
    LBadge,
  },
  mixins: [variant, rounded, roundedFull, filter, size, border],
  inheritAttrs: false,
  props: {
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
    badge: {
      type: [Object],
      default() {
        return {
          position: '',
          variant: '',
        }
      },
      // validator(obj) {
      //   return (
      //     ['primary', 'secondary', 'info', 'success', 'warning', 'danger'].includes(
      //       obj.variant
      //     ) && ['top', 'bottom'].includes(obj.position)
      //   )
      // },
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
        position: 'relative',
        borderSize: props.border
          ? ['2xs', 'xs', 'sm'].includes(props.size)
            ? 'border'
            : 'border-2'
          : '',
        borderColor: props.border ? 'border-white' : '',
        borderStyle: props.border ? 'border-solid' : '',
        borderRadius: props.roundedFull
          ? 'rounded-full'
          : props.rounded
          ? `rounded-${props.size}`
          : '',
        backgroundColor: generateVariant(props.variant, props.filter).backgroundColor,
        fontColor: generateVariant(props.variant, props.filter).fontColor,
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
        fontSize: ['2xs', 'xs'].includes(props.size)
          ? 'text-2xs'
          : props.size === 'sm'
          ? 'text-sm'
          : props.size === 'md'
          ? 'text-xl'
          : 'text-2xl',
      }
      return generateClasses([{ ...classes }])
    })
    const imgClasses = computed(() => {
      const classes = {
        width: 'w-full',
        height: 'h-full',
        borderRadius: props.roundedFull
          ? 'rounded-full'
          : props.rounded
          ? `rounded-${props.size}`
          : '',
        objectFit: 'object-cover',
      }
      return generateClasses([{ ...classes }])
    })
    const badgeClasses = computed(() => {
      const classes = {
        position: 'absolute',
        top: props.badge.position === 'top' ? 'bottom-full' : 'top-full',
        bottom: props.badge.position === 'top' ? 'bottom-full' : '',
        left: 'left-full',
        transform: '-translate-x-1/2 -translate-y-1/2',
        // margin: '-mr-2 -mb-2',
      }
      return generateClasses([{ ...classes }])
    })
    return { computedClasses, iconClasses, imgClasses, badgeClasses }
  },
}
</script>

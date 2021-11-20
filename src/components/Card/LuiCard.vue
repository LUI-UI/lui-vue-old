<template>
  <div
    class="lui-card"
    :class="computedClasses"
  >
    <img
      v-if="img !== ''"
      :src="img"
      :alt="imgAlt"
      :class="imgClasses"
    >
    <div
      v-if="$slots.default"
      class="lui-card--body p-6"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { generateClasses, generateColorVariant } from '../../mixins/methods'
import {
  img,
  border,
  rounded,
  bgVariant,
  textVariant,
  borderVariant,
  borderFilter,
  bgFilter,
  textFilter,
} from '../../mixins/props'
export default {
  mixins: [
    img,
    border,
    rounded,
    borderFilter,
    bgFilter,
    textFilter,
    bgVariant,
    textVariant,
    borderVariant,
  ],
  props: {
    imgAlt: {
      type: String,
      default: 'Card image.',
    },
  },

  setup(props) {
    const computedClasses = computed(() => {
      const classes = {
        backgroundColor: generateColorVariant(props.bgVariant, props.bgFilter, 'bg').colorClasses,
        backgroundClip: 'bg-clip-border',
        border: props.border ? 'border' : '',
        borderStyle: props.border ? 'border-solid' : '',
        borderColor: generateColorVariant(props.borderVariant, props.borderFilter, 'border').colorClasses,
        color: generateColorVariant(props.textVariant, props.textFilter, 'text').colorClasses,
        borderRadius: props.rounded ? 'rounded-md' : '',
        flexDirection: 'flex-col',
        display: 'flex',
        minWidth: 'min-w-0',
        position: 'relative',
        wordBreak: 'break-words',
        overflow: 'overflow-hidden',
      }
      return generateClasses([{ ...classes }])
    })
    const imgClasses = computed(() => {
      const classes = {
        width: 'w-full',
        height: 'h-full',
      }
      return generateClasses([{ ...classes }])
    })
    return {
      computedClasses,
      imgClasses,
    }
  },
}
</script>

<style></style>

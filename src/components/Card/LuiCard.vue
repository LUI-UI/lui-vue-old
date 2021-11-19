<template>
  <div
    class="lui-card"
    :class="computedClasses"
  >
    <img
      v-if="img !== ''"
      :src="img"
      :alt="imgAlt"
      class="w-full h-full"
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
    borderVariant: {
      type: String,
      default: 'secondary',
    },
    imgAlt: {
      type: String,
      default: 'Card image.',
    },
  },

  setup(props) {
    const computedClasses = computed(() => {
      const classes = {
        backgroundColor: generateColorVariant(props.bgVariant, props.bgFilter, 'bg'),
        backgroundClip: 'bg-clip-border',
        border: props.border ? 'border border-solid' : '',
        borderColor: generateColorVariant(props.bgVariant, props.bgFilter, 'border'),
        borderRadius: props.rounded ? 'rounded-md' : '',
        flexDirection: 'flex-col',
        display: 'flex',
        minWidth: 'min-w-0',
        position: 'relative',
        wordBreak: 'break-words',
      }
      return generateClasses([{ ...classes }])
    })
    return {
      computedClasses,
    }
  },
}
</script>

<style></style>

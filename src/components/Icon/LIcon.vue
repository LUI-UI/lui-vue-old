<template>
  <i
    v-bind="$attrs"
    :class="[
      `ri-${name}${fill ? '-fill' : ''}${line ? '-line' : ''}`,
      `ri-${size}`,
    ]"
  />
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '1x',
      validator(value) {
        return [
          'lg',
          'xl',
          'xxs',
          'xs',
          'sm',
          'md',
          '1x',
          '2x',
          '3x',
          '4x',
          '5x',
          '6x',
          '7x',
          '8x',
          '9x',
          '10x',
          'fw',
        ].includes(value)
      },
    },
    fill: {
      type: Boolean,
      default: false,
    },
    line: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

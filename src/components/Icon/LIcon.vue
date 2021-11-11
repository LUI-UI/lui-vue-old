<template>
  <i
    :class="classes"
  />
</template>
<script>
import { computed } from '@vue/reactivity'
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'fw',
      validator(value) {
        return [
          'lg',
          'xl',
          'xxs',
          'xs',
          'sm',
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
  setup(props) {
    const classes = computed(() => {
      return [
        `ri-${props.name}${props.fill ? '-fill' : ''}${
          props.line ? '-line' : ''
        }`,
        `ri-${props.size}`,
      ]
    })
    return {classes}
  },
}

// ***Remixicon sizing

// .ri-lg { font-size: 1.3333em; line-height: 0.75em; vertical-align: -.0667em; }
// .ri-xl { font-size: 1.5em; line-height: 0.6666em; vertical-align: -.075em; }
// .ri-xxs { font-size: .5em; }
// .ri-xs { font-size: .75em; }
// .ri-sm { font-size: .875em }
// .ri-1x { font-size: 1em; }
// .ri-2x { font-size: 2em; }
// .ri-3x { font-size: 3em; }
// .ri-4x { font-size: 4em; }
// .ri-5x { font-size: 5em; }
// .ri-6x { font-size: 6em; }
// .ri-7x { font-size: 7em; }
// .ri-8x { font-size: 8em; }
// .ri-9x { font-size: 9em; }
// .ri-10x { font-size: 10em; }
// .ri-fw { text-align: center; width: 1.25em; }
</script>

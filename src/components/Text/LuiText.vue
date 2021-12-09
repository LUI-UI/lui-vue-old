<template>
  <component
    :is="tag"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script>
import * as prop from '../../mixins/props'
import { computed } from 'vue'
import { generateClasses } from '../../mixins/methods'
export default {
  mixins: [
    prop.string('tag', 'p', [
      'p',
      'span',
      'br',
      'strong',
      'em',
      'quotes',
      'blockquote',
      'code',
      'pre',
      'mark',
      'ins',
      'del',
      'sup',
      'sub',
      'small',
      'i',
      'b',
      'abbr',
      'address',
      'bdi',
      'bdo',
      'cite',
      'dfn',
      'kbs',
      'meter',
      'q',
      'rp',
      'rt',
      'ruby',
      's',
      'samp',
      'time',
      'u',
      'var',
      'wbr',
    ]),
    prop.size('md', ['xs', 'sm', 'md', 'lg', 'xlg']),
    prop.variant('variant', 'secondary'),
  ],
  setup(props) {
    const classes = computed(() => {
      const styles = {
        fontColor: `text-${props.variant}-600`,
        fontSize:
          props.size === 'xs'
            ? 'text-xs'
            : props.size === 'sm'
            ? 'text-sm'
            : props.size === 'lg'
            ? 'text-base'
            : 'text-xl',
        lineHeight:
          props.size === 'xxsm'
            ? 'leading-3'
            : props.size === 'xsm'
            ? 'leading-4.5'
            : props.size === 'sm'
            ? 'leading-5'
            : props.size === 'lg'
            ? 'leading-6'
            : 'leading-7',
      }
      return generateClasses([{ ...styles }])
    })
    return {
      classes,
    }
  },
}
</script>

<template>
  <component
    :is="prependAttrs.tag"
    v-if="prepend !== null"
    v-bind="prependAttrs"
    :class="computedClasses.prepend"
  />
  <span
    v-show="textActive"
    :class="computedClasses.text"
  >
    {{ text }}
  </span>
  <component
    :is="appendAttrs.tag"
    v-if="append !== null"
    v-bind="appendAttrs"
    :class="computedClasses.append"
  />
</template>
<script>
import { computed } from 'vue'
import LuiIcon from '../Icon/LuiIcon.vue'
import LuiBadge from '../Badge/LuiBadge.vue'
import LuiAvatar from '../Avatar/LuiAvatar.vue'
import * as prop from '../../mixins/props'
import { generateClasses } from '../../mixins/methods'
export default {
  components: {
    LuiIcon,
    LuiBadge,
    LuiAvatar,
  },
  mixins: [
    prop.string('text', ''),
    prop.size('md', ['sm', 'md', 'lg']),
    prop.boolean('optionsActive'),
    prop.boolean('textActive', true),
  ],
  props: {
    prepend: {
      type: [Object, null],
      default: null,
    },
    append: {
      type: [Object, null],
      default: null,
    },
  },
  setup(props) {
    function findSize(sizes) {
      return sizes[props.size]
    }
    const appendAttrs = computed(() => {
      if (props.append === null) return null
      let attrs = props.append
      if (props.append.tag === 'lui-icon')
        attrs.class = findSize({ sm: 'text-base', md: 'text-xl', lg: 'text-2xl' })
      else attrs.size = findSize({ sm: '2xs', md: 'xs', lg: 'sm' })
      return attrs
    })

    const prependAttrs = computed(() => {
      if (props.prepend === null) return null
      let attrs = props.prepend
      if (props.prepend.tag === 'lui-icon')
        attrs.class = findSize({ sm: 'text-base', md: 'text-xl', lg: 'text-2xl' })
      else attrs.size = findSize({ sm: '2xs', md: 'xs', lg: 'sm' })
      return attrs
    })

    const computedClasses = computed(() => {
      const classes = {
        text: {
          marginLeft: props.prepend !== null ? 'ml-2' : '',
        },
        append: {
          maginLeft: 'ml-auto',
          lineHeight:
            props.append !== null ? (props.append.tag === 'lui-icon' ? 'leading-none' : '') : '',
        },
        prepend: {
          lineHeight: props.prepend !== null ? (props.prepend.tag === 'lui-icon' ? 'leading-none' : '') : '',
        }
      }
      return {
        text: generateClasses([{ ...classes.text }]),
        append: generateClasses([{ ...classes.append }]),
        prepend: generateClasses([{ ...classes.prepend }]),
      }
    })

    return { prependAttrs, appendAttrs, computedClasses }
  },
}
</script>

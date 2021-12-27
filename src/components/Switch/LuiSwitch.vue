<template>
  <div class="container">
    <input
      type="checkbox"
      :class="computedClasses.input"
      v-bind="$attrs"
    >
    <span :class="computedClasses.span" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { generateClasses } from '../../mixins/methods'
import * as prop from '../../mixins/props'
export default {
  mixins: [prop.size('sm', ['sm', 'md', 'lg'])],
  inheritAttrs: false,
  props: {
    state: {
      type: [String, Boolean, null],
      default: null,
      validator(value) {
        return [null, 'warning', true, false].includes(value)
      },
    },
  },
  setup(props) {
    function findSize(sizes) {
      return sizes[props.size]
    }

    const computedClasses = computed(() => {
      const classes = {
        input: {
          position: 'absolute',
          opacity: 'opacity-0',
          width: findSize({ sm: 'w-8', md: 'w-5', lg: 'w-6' }),
          height: findSize({ sm: 'h-4', md: 'h-5', lg: 'h-6' }),
          cursor: 'cursor-pointer',
          peer: 'peer',
        },
        span: {
          display: 'flex items-center',
          alignItems: 'peer-checked:justify-end' ,
          width: findSize({ sm: 'w-8', md: 'w-5', lg: 'w-6' }),
          height: findSize({ sm: 'h-4', md: 'h-5', lg: 'h-6' }),
          // borderWidth: findSize({ sm: 'border-1.5', md: 'border-2', lg: 'border-2.5' }),
          // borderWidth: 'border',
          // borderColor:
          //   props.state === null
          //     ? 'border-primary'
          //     : props.state === 'warning'
          //     ? 'border-warning'
          //     : props.state === true
          //     ? 'border-success'
          //     : 'border-danger',
          borderRadius: 'rounded-full',
          backgroundColor: 'bg-secondary-300 peer-checked:bg-primary',
          ringWidth: 'ring-2',
          ringColor: 'ring-secondary-200 peer-checked:ring-primary-200',
          // ringWidth: props.size === 'sm' ? 'peer-focus:ring-1' : 'peer-focus:ring-2',
          // ringOffset: 'peer-focus:ring-offset-2',
          // ringColor: props.state === null ? 'peer-focus:ring-primary' : props.state === 'warning' ? 'peer-focus:ring-warning' : props.state === true ? 'peer-focus:ring-success' : 'peer-focus:ring-danger',
          paddigX: 'px-0.5',
        },
        spanBefore: {
          // width: findSize({ sm: 'before:w-2', md: 'before:w-2.5', lg: 'before:w-3' }),
          width: 'before:w-3',
          height: 'before:h-3',
          // height: findSize({ sm: 'before:h-2', md: 'before:h-2.5', lg: 'before:h-3' }),
          borderRadius: 'before:rounded-full',
          backgroundColor: 'before:bg-white',
          borderWidth: 'before:border',
          borderColor: 'before:border-secondary-200 peer-checked:before:border-primary-200',

          // backgroundColorChecked:
          //   props.state === null
          //     ? 'peer-checked:before:bg-primary'
          //     : props.state === 'warning'
          //     ? 'peer-checked:before:bg-warning'
          //     : props.state === true
          //     ? 'peer-checked:before:bg-success'
          //     : 'peer-checked:before:bg-danger',
        },
      }
      return {
        input: generateClasses([{ ...classes.input }]),
        span: generateClasses([{ ...classes.span }, { ...classes.spanBefore }]),
      }
    })

    return { computedClasses }
  },
}
</script>
 
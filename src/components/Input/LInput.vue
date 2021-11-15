<template>
  <div>
    <label
      v-if="label !== 'none'"
      :for="$attrs.id"
      :class="labelClasses"
    >
      {{ label }}
    </label>
    <div class="relative">
      <!-- <LIcon
        name="search-2"
        class="text-md text-secondary-400 absolute left-2 top-2/4 transform -translate-y-1/2"
        line
      /> -->
      <input
        type="text"
        v-bind="$attrs"
        :class="computedClasses"
      >
    </div>

    <p
      v-if="description !== 'none'"
      :class="descriptionClasses"
    >
      {{ description }}
    </p>
  </div>
</template>
<script>
import { generateClasses } from '../../mixins/methods'
import { computed } from 'vue'
// import LIcon from '../Icon/LIcon.vue'
export default {
  // components: {
  //   LIcon,
  // },
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'sm',
      validator(value) {
        return ['sm', 'md', 'lg'].includes(value)
      },
    },
    state: {
      type: [String, Boolean, null],
      default: null,
      validator(value) {
        return [null, 'warning', true, false].includes(value)
      },
    },
    label: {
      type: String,
      default: 'none',
    },
    description: {
      type: String,
      default: 'none',
    },
  },
  setup(props) {
    const computedClasses = computed(() => {
      const classes = {
        padding:
          props.size === 'sm'
            ? 'py-1.5 pl-8 pr-2'
            : props.size === 'md'
            ? 'p-2'
            : 'p-3',
        border: 'border border-secondary-200',
        borderRadius: `rounded-${props.size}`,
        fontSize: props.size === 'sm' ? 'text-xs' : 'text-base',
        lineHeight: props.size === 'sm' ? 'leading-4.5' : 'leading-6',
        fontColor: 'placeholder-secondary-400 text-secondary-600',
      }
      const stateClasses = {
        focus: {
          outline: 'focus:outline-none',
          ring:
            props.state === null
              ? 'focus:ring-primary-100 focus:ring-4'
              : props.state === 'warning'
              ? 'focus:ring-warning-100 focus:ring-2'
              : props.state
              ? 'focus:ring-success-50 focus:ring-2'
              : !props.state
              ? 'focus:ring-danger-50 focus:ring-2'
              : '',
          border:
            props.state === null
              ? 'focus:border-primary'
              : props.state === 'warning'
              ? 'focus:border-warning'
              : props.state
              ? 'focus:border-success'
              : !props.state
              ? 'focus:border-danger'
              : '',
        },
        disabled: {
          border: 'disabled:border-secondary',
          backgroundColor: 'disabled:bg-secondary-100',
          fontColor: 'disabled:text-secondary-300',
        },
      }
      const { focus, disabled } = stateClasses
      return generateClasses([{ ...classes }, { ...focus }, { ...disabled }])
    })
    const labelClasses = computed(() => {
      return 'block text-secondary-600 text-xs leading-4.5 mb-1'
    })
    const descriptionClasses = computed(() => {
      const textColor =
        props.state === true
          ? 'text-success'
          : props.state === false
          ? 'text-danger'
          : props.state === 'warning'
          ? 'text-warning'
          : 'text-secondary-600'
      return `${textColor} block text-xs leading-4.5 mt-1`
    })

    return { computedClasses, labelClasses, descriptionClasses }
  },
}
</script>

<template>
  <div>
    <label
      v-if="label !== 'none'"
      :for="$attrs.id"
      :class="labelClasses"
    >
      {{ label }}
    </label>
    <div class="relative w-max">
      <LIcon
        v-if="prefix !== 'none'"
        name="search-2"
        class="
          text-md text-secondary-400
          absolute
          left-2
          top-2/4
          transform
          -translate-y-1/2
        "
        line
      />
      <input
        type="text"
        v-bind="$attrs"
        :class="computedClasses"
      >
      <LIcon
        v-if="state !== null"
        :name="stateIconName"
        :class="stateIconClasses"
        class="
          text-secondary-400
          absolute
          right-2
          top-2/4
          transform
          -translate-y-1/2
        "
        line
      />
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
import LIcon from '../Icon/LIcon.vue'
export default {
  components: {
    LIcon,
  },
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
    prefix: {
      type: String,
      default: 'none',
    },
  },
  setup(props,context) {
    const computedClasses = computed(() => {
      const classes = {
        // sm: 32 36: p-9 44: p-11
        paddingX:
          props.prefix === 'none'
            ? props.size === 'lg'
              ? 'px-3'
              : 'px-2'
            : props.size === 'sm' //icon varsa
            ? 'px-8'
            : props.size === 'md'
            ? 'px-9'
            : 'px-11',
        paddingY:
          props.size === 'sm'
            ? 'py-1.5'
            : props.size === 'md'
            ? 'py-2'
            : 'py-3',
        border:
          props.state === 'warning'
            ? 'border border-warning'
            : props.state === true
            ? 'border border-success'
            : props.state === false
            ? 'border border-danger'
            : 'border border-secondary-200',
        ring:
          props.state === 'warning'
            ? 'ring-4 ring-warning-100'
            : props.state === true
            ? 'ring-4 ring-success-100'
            : props.state === false
            ? 'ring-4 ring-danger-100'
            : '',
        borderRadius: `rounded-${props.size}`,
        fontSize: props.size === 'sm' ? 'text-xs' : 'text-base',
        lineHeight: props.size === 'sm' ? 'leading-4.5' : 'leading-6',
        fontColor: 'placeholder-secondary-400 text-secondary-200',
      }
      const stateClasses = {
        focus: {
          ring:
            props.state === null ? 'focus:ring-4 focus:ring-primary-100' : '',
          outline: 'outline-none',
          border: props.state === null ? 'focus:border-primary' : ''
        },
        disabled: {
          border: 'disabled:border-secondary',
          backgroundColor: 'disabled:bg-secondary-100',
          fontColor: 'disabled:text-secondary-300',
          ring: 'disabled:ring-0 disabled:ring-transparent',
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
    const stateIconName = computed(() => {
      return props.state === 'warning'
        ? 'feedback'
        : props.state === false
        ? 'error-warning'
        : props.state === true
        ? 'checkbox-circle'
        : !!context.attrs.disabled === true
        ? 'forbid'
        : ''
        
    })

    const stateIconClasses = computed(() => {
      const classes = {
        // 16 20: text-xl 24: text-2xl
        size: props.size === 'sm' ? 'text-base' : props.size === 'md' ? 'text-xl' : 'text-2xl'
      }
      return generateClasses[{...classes}]
    })
    return { computedClasses, labelClasses, descriptionClasses, stateIconName, stateIconClasses }
  },
}
</script>

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
      <l-icon
        v-if="prefix !== 'none'"
        name="search-2"
        :class="[iconClasses.size, iconClasses.position]"
        class="text-secondary-400 left-2"
        line
      />
      <input
        type="text"
        v-bind="$attrs"
        :class="computedClasses"
      >
      <l-button 
        v-if="clear" 
        type="text"
        variant="secondary"
        icon="close"
        size="sm"
        :class="iconClasses.position"
        class="right-2"
      />
      <l-icon
        v-if="state !== null"
        :name="iconClasses.name"
        :class="[iconClasses.size, iconClasses.color, iconClasses.position]"
        class="right-2"
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
import LButton from '../Button/LButton.vue'
export default {
  components: {
    LIcon,
    LButton,
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
    clear: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
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
        fontColor: 'placeholder-secondary-400 text-secondary-600',
      }
      const stateClasses = {
        focus: {
          ring:
            props.state === null ? 'focus:ring-4 focus:ring-primary-100' : '',
          outline: 'outline-none',
          border: props.state === null ? 'focus:border-primary' : '',
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

    const iconClasses = computed(() => {
      return {
        name:
          props.state === 'warning'
            ? 'feedback'
            : props.state === false
            ? 'error-warning'
            : props.state === true
            ? 'checkbox-circle'
            : !!context.attrs.disabled === true
            ? 'forbid'
            : '',
        size:
          props.size === 'sm'
            ? 'text-base'
            : props.size === 'md'
            ? 'text-xl'
            : 'text-2xl',
        color:
          props.state === 'warning'
            ? 'text-warning'
            : props.state === false
            ? 'text-danger'
            : props.state === true
            ? 'text-success'
            : !!context.attrs.disabled === true
            ? 'text-secondary-300'
            : '',
        position: 'absolute top-2/4 transform -translate-y-1/2',
      }
    })

    return {
      computedClasses,
      labelClasses,
      descriptionClasses,
      iconClasses,
    }
  },
}
</script>

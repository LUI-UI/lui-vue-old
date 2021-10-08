<template>
  <button
    type="button"
    class="text-wsan"
    :class="classes"
    :style="style"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
<script>
import './lui-button.css'
export default {}
</script>
<script setup>
import { defineEmits, defineProps, computed } from 'vue'
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1
    },
    default: '',
  },
  backgroundColor: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['click', 'test'])

const classes = computed(() => ({
  'storybook-button': true,
  'bg-blue-500': props.primary,
  'bg-gray-400': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}))
function onClick() {
  emit('click')
}

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}))
</script>

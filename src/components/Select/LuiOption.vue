<template>
  <li
    v-bind="$attrs"
    :class="[computedClasses, selectedStyles]"
  >
    <slot />
  </li>
</template>
<script>
import { generateClasses } from '../../mixins/methods'
import { computed, inject, ref, watch } from 'vue'
export default {
  props: {
    selected: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const parentProps = inject('parentProps')
    const isSelected = ref(props.selected)
    const computedClasses = computed(() => {
      const styles = {
        marginLeft: 'ml-2',
        marginRight: 'mr-2',
        marginTop: 'mt-2',
        padding:
          parentProps.size === 'sm'
            ? 'p-1.5'
            : parentProps.size === 'md'
            ? 'p-2'
            : parentProps.size === 'lg'
            ? 'p-3'
            : '',
        borderRadius: parentProps.rounded ? 'rounded-lg' : '',
        cursor: 'cursor-pointer',
        // textColor: `text-secondary-600 hover:text-primary`,
        // backgroundColor: 'bg-white hover:bg-primary-100',
        display: 'block',
      }
      return generateClasses([{ ...styles }])
    })

    watch(isSelected, (value) => { 
      console.log("isSelected",value)
      if(value) isSelected.value = true
      else isSelected.value = false


    })

    const selectedStyles = computed(() => {
      return isSelected.value
        ? 'bg-primary text-white'
        : 'bg-white hover:bg-primary-100 text-secondary-600 hover:text-primary'
    })
    return { computedClasses, selectedStyles }
  },
}
</script>

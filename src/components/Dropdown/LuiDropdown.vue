<template>
  <div
    class="dropdown"
    :class="computedClasses.container"
  >
    <lui-button
      type="outline"
      variant="primary"
      rounded
      aria-expanded="false"
      icon="arrow-down-s"
      icon-line
      @click.stop="menuActive = !menuActive"
    >
      {{ text }}
    </lui-button>
    <ul
      v-show="menuActive"
      :class="computedClasses.content"
      class="dropdown-menu"
    >
      <lui-dropdown-item>Mon panier</lui-dropdown-item>
      <lui-dropdown-item>Mes commandes</lui-dropdown-item>
      <!-- <slot /> -->
    </ul>
  </div>
</template>
<script>
import LuiButton from '../Button/LuiButton.vue'
import LuiDropdownItem from './LuiDropdownItem.vue'
import { generateClasses } from '../../mixins/methods'
import * as prop from '../../mixins/props'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
export default {
  components: { LuiButton, LuiDropdownItem },
  mixins: [
    prop.variant(),
    prop.filter(),
    prop.boolean('rounded'),
    prop.boolean('block'),
    prop.boolean('uppercase'),
    prop.string('icon'),
    prop.boolean('iconLine'),
    prop.string('prepend'),
    prop.boolean('left'),
    prop.boolean('right'),
    prop.boolean('top'),
    prop.boolean('bottom'),
    prop.string('text','Dropdown'),
    prop.size('md', ['sm', 'md', 'lg']),
  ],
  setup(props) {
    const menuActive = ref(false)
    function closeDropdown() {
      menuActive.value = false
    }
    const computedClasses = computed(() => {
      const classes = {
        container: {
          position: 'relative',
          width: 'w-max',
        },
        content: {
          position: 'absolute',
          top: !props.top ? 'top-full' : '',
          bottom: props.top ? 'bottom-full' : '',
          left: !props.right ? 'left-0' : '',
          right: props.right ? 'right-0' : '',
          backgroundColor: 'bg-white',
          borderRadius: 'rounded-lg',
          border: 'border border-secondary-200',
          width: 'w-max',
          paddingBottom: 'pb-2',
          marginBottom: !props.top ? 'mt-2' : '',
          marginTop: props.top ? 'mb-2' : '',
        },
      }
      return {
        container: generateClasses([{ ...classes.container }]),
        button: generateClasses([{ ...classes.button }]),
        content: generateClasses([{ ...classes.content }]),
      }
    })
    onMounted(() => {
      document.addEventListener('click', closeDropdown)
    })
    onBeforeUnmount(() => {
      document.removeEventListener('click', closeDropdown)
    })

    return { menuActive, computedClasses }
  },
}
</script>

<script>
import LuiInput from './components/Input/LuiInput.vue'
import LuiButton from './components/Button/LuiButton.vue'
import Dropdown from './components/Dropdown/LuiDropdown.vue'
import DItem from './components/Dropdown/LuiDropdownItem.vue'
export default {
  components: { LuiInput, LuiButton, Dropdown, DItem },
  data() {
    return {
      form: 'test',
      label: '',
    }
  },
  methods: {
    test(e) {
      console.log('change', e.target.value)
      this.label = e.target.value
    },
    btnClck() {
      console.log('test buttn clcuk')
    },
    handleChanges(val) {
      console.log(val)
    },
  },
}
</script>

<template>
  <div class="m-24">
    <label>{{ label }}</label>
    <lui-input
      v-model="form"
      @change="test"
    />
    <lui-button
      variant="primary"
      rounded
      @click="btnClck"
    >
      test
    </lui-button>
    <hr>
    <dropdown @onChange="handleChanges">
      <d-item>test</d-item>
    </dropdown>
  </div>
</template>

<script>
import LuiInput from './components/Input/LuiInput.vue'
import LuiButton from './components/Button/LuiButton.vue'
import Dropdown from './components/Dropdown/LuiDropdown.vue'
import DItem from './components/Dropdown/LuiDropdownItem.vue'
import LuiSelect from './components/Select/LuiSelect.vue'

export default {
  components: { LuiInput, LuiButton, Dropdown, DItem, LuiSelect },
  data() {
    return {
      form: 'test',
      label: '',
      selectedCity: 'Edirne',
      options: [
        { text: 'Edirne', value: 22, isSelected: false },
        { text: 'Tekirdag', value: 59, isSelected: false },
        { text: 'Kırklareli', value: 39, isSelected: false },
        { text: 'Izmir', value: 35, isSelected: false },
        { text: 'Mugla', value: 48, isSelected: false },
      ],
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
    <label>{{ selectedCity }}</label>
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
    <hr class="my-8">
    <lui-select
      v-model="selectedCity"
      placeholder="Placeholder test"
      :options="options"
      multiple
    />
    <hr class="my-8">
    <input type="checkbox">
  </div>
</template>

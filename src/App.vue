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
        { text: 'Edirne', value: 22 },
        { text: 'Tekirdag', value: 59 },
        { text: 'Kırklareli', value: 39 },
        { text: 'Izmir', value: 35 },
        { text: 'Mugla', value: 48 },
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
      :options="options"
      multiple
    />
  </div>
</template>

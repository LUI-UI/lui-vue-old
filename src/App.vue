<script>
import LuiInput from './components/Input/LuiInput.vue'
import LuiButton from './components/Button/LuiButton.vue'
import Dropdown from './components/Dropdown/LuiDropdown.vue'
import DItem from './components/Dropdown/LuiDropdownItem.vue'
import LuiSelect from './components/Select/LuiSelect.vue'
import LuiTabs from './components/Tabs/LuiTabs.vue'
import LuiTab from './components/Tabs/LuiTab.vue'

export default {
  components: { LuiInput, LuiButton, Dropdown, DItem, LuiSelect, LuiTabs, LuiTab },
  data() {
    return {
      form: 'test',
      label: '',
      selectedCity: 'Edirne',
      options: [
        { text: 'Edirne', value: 22, isSelected: false },
        { text: 'Tekirdag', value: 59 },
        { text: 'Kırklareli', value: 39 },
        { text: 'Izmir', value: 35 },
        { text: 'Mugla', value: 48 },
      ],
      optPrepend: {
        tag: "lui-icon",
        name: "map-2",
        line: true
      },
      selectAppend: {
        tag: 'lui-icon',
        name: 'arrow-down-s',
        line: true
      }
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
      :multiple="true"
      :option-prepend="optPrepend"
      :select-append="selectAppend"
      :select-prepend="optPrepend"
      size="lg"
    />
    <hr class="my-8">
    <lui-tabs>
      <lui-tab title="tab1">
        test 1
      </lui-tab>
      <lui-tab title="tab2">
        test 2
      </lui-tab>
      <lui-tab title="tab3">
        test 3
      </lui-tab>
    </lui-tabs>
  </div>
</template>

import LuiSelect from './LuiSelect.vue'

export default {
  title: 'LuiSelect',
  component: LuiSelect,
  args: {
    label: 'Select',
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // onClick: {},
    // size: {
    //   control: { type: 'select' },
    //   options: ['xxsm', 'xsm', 'sm', 'lg', 'xlg'],
    // },
    // variant: {
    //   control: { type: 'select' },
    //   options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
    // },
  },
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LuiSelect },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const options = [
      { text: 'Edirne', value: 22 },
      { text: 'Tekirdag', value: 59 },
      { text: 'Kırklareli', value: 39 },
      { text: 'Izmir', value: 35 },
      { text: 'Mugla', value: 48 },
    ]
    return { args, options }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<lui-select v-bind="args" :options="options" text-field="text" class="m-20"> </lui-select>`,
})

export const Tets = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
// BaseSelect.args = {
//   size: 'sm',
//   variant: 'primary',
// }

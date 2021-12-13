import LuiDropdown from './LuiDropdown.vue'

export default {
  title: 'LuiDropdown',
  component: LuiDropdown,
  args: {
    // label: 'link',
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
    // left: {
    //   control: { type: 'boolean' },
    // },
    // right: {
    //   control: { type: 'boolean' },
    // },
    // top: {
    //   control: { type: 'boolean' },
    // },
    // bottom: {
    //   control: { type: 'boolean' },
    // },
  },
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LuiDropdown },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<lui-dropdown v-bind="args"> </lui-dropdown>`,
})
export const Dropdown = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
// Dropdown.args = {
//   size: 'sm',
//   variant: 'primary',
// }

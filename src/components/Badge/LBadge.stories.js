import LBadge from './LBadge.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Badge',
  component: LBadge,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
    },
    border: {
      control: { type: 'boolean' },
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LBadge },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<l-badge v-bind="args" />`,
})

export const Danger = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Danger.args = {
  variant: 'danger',
}
export const Large = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Large.args = {
  type: 'lg',
}

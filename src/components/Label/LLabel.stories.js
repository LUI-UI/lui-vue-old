import LLabel from './LLabel.vue'

export default {
  title: 'Label',
  component: LLabel,
  args: {
    label: "label",
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // onClick: {},
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg'],
    },
  },
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LLabel },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<l-label v-bind="args"> {{ args.label }} </l-label>`,
})


export const Small = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Small.args = {
  size: 'sm',
}
export const Large = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Large.args = {
  size: 'sm',
}
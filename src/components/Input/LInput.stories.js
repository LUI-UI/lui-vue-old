import LInput from './LInput.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: LInput,
  args: {
    disable: false,
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // onClick: {},
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    state: {
      control: { type: 'select' },
      options: [null, 'warning', true, false],
    },
    label: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    prefix: {
      control: {type: 'text' }
    }
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<l-input v-bind="args" :disabled="args.disable" placeholder="Placeholder"> {{ args.label }} </l-input>`,
})

export const Small = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Small.args = {
  size: 'sm',
}
export const Large = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Large.args = {
  size: 'lg',
}

import LButton from './LButton.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: LButton,
  args: {
    label: 'test',
    disable: false,
  },  
  
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
    },
    block: {
      control: { type: 'boolean' },
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'text', 'outline', 'link', 'link-underline'],
    },
    rounded: {
      control: { type: 'boolean' },
    },
    roundedFull: {
      control: { type: 'boolean' },
    },
    filter: {
      control: { type: 'select' },
      options: ['darker', 'lighter', 'none'],
    },
    icon: {
      control: { type: 'select' },
      options: ['home', 'arrow-right', 'mail-check', 'none'],
    },
    prefix: {
      control: { type: 'select' },
      options: ['home', 'arrow-right', 'mail-check','none'],
    },
    disableStyles:{
      control: { type: 'multi-select' },
      options: ['hover', 'focus', 'disable', 'underline',true,false],
    }
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<l-button v-bind="args" :disabled="args.disable"> {{ args.label }} </l-button>`,
})

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  type: 'default',
}
export const Outline = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Outline.args = {
  type: 'outline',
}
export const Text = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Text.args = {
  type: 'text',
}

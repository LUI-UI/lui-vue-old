import LuiHead from './LuiHead.vue'

export default {
  title: 'LuiHead',
  component: LuiHead,
  args: {
    label: "heading",
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // onClick: {},
    display: {
      control: { type: 'boolean' },
    },
    level:{
      control: {type: 'select'},
      options: ['1','2','3','4','5','6']
    }
  },
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LuiHead },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<lui-head v-bind="args"> {{ args.label }} </lui-head>`,
})


export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  level: '3',
}
export const Display = Template.bind({})

Display.args = {
  level: '3',
  display: true
}

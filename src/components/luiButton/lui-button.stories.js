import LuiButton from './lui-button.vue'

export default {
  title: 'Inputs/LuiButton',
  component: LuiButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
}

const Template = (args) => ({
  components: { LuiButton },
  setup() {
    return { args }
  },
  template: '<LuiButton v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}

import LBadge from './LBadge.vue'

export default {
  title: 'Inputs/LBadge',
  component: LBadge,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // onClick: {},
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    // variant: {
    //   control: { type: 'select' },
    //   options: ['xsmall', 'small', 'medium', 'large'],
    // },
  },
}

const Template = (args) => ({
  components: { LBadge },
  setup() {
    return { args }
  },
  template: '<LBadge v-bind="args" />',
})

export const Xsmall = Template.bind({})
Small.args = {
  size: 'xs',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}
export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
}
export const Large = Template.bind({})
Large.args = {
  size: 'lg',
}

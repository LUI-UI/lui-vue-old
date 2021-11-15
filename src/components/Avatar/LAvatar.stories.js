import LAvatar from './LAvatar.vue'
export default {
  title: 'Avatar',
  component: LAvatar,
  argTypes: {
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
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
  },
}

const Template = (args) => ({
  components: { LAvatar },
  setup() {
    return { args }
  },
  template: `<l-avatar v-bind="args"> {{ args.label }} </l-avatar>`,
})

export const Default = Template.bind({})
Default.args = {
  type: 'default',
}

export const Text = Template.bind({})
Text.args = {
  text: 'BB',
}
export const Icon = Template.bind({})
Icon.args = {
  icon: 'home',
}
export const Image = Template.bind({})
Icon.args = {
  icon: 'home',
}

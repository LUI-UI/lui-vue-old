import LAvatar from './LAvatar.vue'
export default {
  title: 'Avatar',
  component: LAvatar,
  argTypes: {
    onClick: {},
    border: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['2xs', 'xs', 'sm', 'md', 'lg'],
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
      options: ['user', 'arrow-right', 'mail-check', 'home', 'user', 'account-circle'],
    },
    img: {
      control: { type: 'select' },
      options: ['', 'https://randomuser.me/api/portraits/men/43.jpg'],
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
  text: 'BB',
}

export const Text = Template.bind({})
Text.args = {
  text: 'BB',
}
export const Icon = Template.bind({})
Icon.args = {
  icon: 'user',
}
export const Image = Template.bind({})
Icon.args = {
  img: 'https://randomuser.me/api/portraits/men/43.jpg',
}

import LuiCard from './LuiCard.vue'
import {
  img,
  border,
  rounded,
  bgVariant,
  textVariant,
  borderVariant,
  borderFilter,
  bgFilter,
  textFilter,
} from '../../utils/storyProps'
export default {
  title: 'Lui Card',
  components: LuiCard,
  argTypes: {
    img,
    border,
    rounded,
    bgVariant,
    textVariant,
    borderVariant,
    borderFilter,
    bgFilter,
    textFilter,
  },
}

const Template = (args) => ({
  components: { LuiCard },
  setup() {
    return { args }
  },
  template: `<lui-card v-bind="args"> Test </lui-card>`,
})
export const Default = Template.bind({})
Default.args = {}

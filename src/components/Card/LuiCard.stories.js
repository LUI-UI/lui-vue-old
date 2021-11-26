import LuiCard from './LuiCard.vue'
import {
  img,
  border,
  rounded,
  borderFilter,
  bgFilter,
  textFilter,
  bgVariant,
  textVariant,
  borderVariant,
} from '../../utils/storyProps'
export default {
  title: 'LuiCard',
  components: LuiCard,
  argTypes: {
    img,
    border,
    rounded,
    borderFilter,
    bgFilter,
    textFilter,
    bgVariant,
    textVariant,
    borderVariant,
  },
}

const Template = (args) => ({
  components: { LuiCard },
  setup() {
    return { args }
  },
  template: `
  <div class="p-5 flex justify-center">
  <lui-card v-bind="args" class="w-1/2"> Test </lui-card>
  </div>
  `,
})
export const Default = Template.bind({})
Default.args = {
  bgVariant: 'primary',
  textVariant: 'secondary',
  bgFilter: 'lighter',
  textFilter: 'darker',
}

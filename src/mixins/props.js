// helper functions
const variantProps = {
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary', 'info', 'success', 'warning', 'danger'].includes(value)
    },
  },
}
const filterProps = {
  filter: {
    type: String,
    default: 'none',
    validator(value) {
      return ['darker', 'lighter', 'none'].includes(value)
    },
  },
}
export const variant = {
  props: variantProps,
}
export const bgVariant = {
  props: variantProps,
}
export const textVariant = {
  props: variantProps,
}
export const borderVariant = {
  props: variantProps,
}
export const block = {
  props: {
    block: {
      type: Boolean,
      default: false,
    },
  },
}
export const rounded = {
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
  },
}
export const roundedFull = {
  props: {
    roundedFull: {
      type: Boolean,
      default: false,
    },
  },
}
export const filter = {
  props: {
    filter: {
      type: String,
      default: 'none',
      validator(value) {
        return ['darker', 'lighter', 'none'].includes(value)
      },
    },
  },
}
export const borderFilter = {
  props: filterProps,
}
export const bgFilter = {
  props: filterProps
}
export const textFilter = {
  props: filterProps
}
export const border = {
  props: {
    border: {
      type: Boolean,
      default: false,
    },
  },
}
export const size = {
  props: {
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['2xs', 'xs', 'sm', 'md', 'lg'].includes(value)
      },
    },
  },
}
export const img = {
  props: {
    img: {
      type: String,
      default: '',
    },
  },
}



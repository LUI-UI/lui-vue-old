// helper functions
function variantProps(name) {
  return {
    props: {
      [name]: {
        type: String,
        default: 'primary',
        validator(value) {
          return ['light', 'dark', 'white', 'primary', 'secondary', 'info', 'success', 'warning', 'danger'].includes(value)
        },
      }
    },
  }
}
function filterProps(name) {
  return {
    props: {
      [name]: {
        type: String,
        default: 'none',
        validator(value) {
          return ['darker', 'lighter', 'none'].includes(value)
        },
      }
    }
  }
}

export const variant = variantProps('variant')
export const bgVariant = variantProps('bgVariant')
export const textVariant = variantProps('textVariant')
export const borderVariant = variantProps('borderVariant')
export const filter = filterProps('filter')
export const borderFilter = filterProps('borderFilter')
export const bgFilter = filterProps('bgFilter')
export const textFilter = filterProps('textFilter')
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
export const border = {
  props: {
    border: {
      type: Boolean,
      default: false,
    },
  },
}
export const prepend = {
  props: {
    prepend: {
      type: String,
      default: 'none',
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
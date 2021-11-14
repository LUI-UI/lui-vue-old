export const variant = {
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'secondary',
          'info',
          'success',
          'warning',
          'danger',
        ].includes(value)
      },
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
  roundedFull: {
    type: Boolean,
    default: false,
  },
}
export const filter = {
  filter: {
    type: String,
    default: 'none',
    validator(value) {
      return ['darker', 'darker', 'none'].includes(value)
    },
  },
}

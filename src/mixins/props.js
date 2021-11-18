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
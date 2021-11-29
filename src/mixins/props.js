// helper functions
// function variantProps(name, defaultValue) {
//   return {
//     props: {
//       [name]: {
//         type: String,
//         default: defaultValue || 'primary',
//         validator(value) {
//           const list =
//             name === 'variant'
//               ? ['primary', 'secondary', 'info', 'success', 'warning', 'danger']
//               : [
//                   'light',
//                   'dark',
//                   'white',
//                   'black',
//                   'primary',
//                   'secondary',
//                   'info',
//                   'success',
//                   'warning',
//                   'danger',
//                 ]
//           return list.includes(value)
//         },
//       },
//     },
//   }
// }
// function filterProps(name) {
//   return {
//     props: {
//       [name]: {
//         type: String,
//         default: 'none',
//         validator(value) {
//           return ['darker', 'lighter', 'none'].includes(value)
//         },
//       },
//     },
//   }
// }

export function variant(name, defaultValue) {
  return {
    props: {
      [name || 'variant']: {
        type: String,
        default: defaultValue || 'primary',
        validator(value) {
          const list =
            name === 'variant'
              ? ['primary', 'secondary', 'info', 'success', 'warning', 'danger']
              : [
                  'light',
                  'dark',
                  'white',
                  'black',
                  'primary',
                  'secondary',
                  'info',
                  'success',
                  'warning',
                  'danger',
                ]
          return list.includes(value)
        },
      },
    },
  }
}

export function filter(name) {
  return {
    props: {
      [name || 'filter']: {
        type: String,
        default: 'none',
        validator(value) {
          return ['darker', 'lighter', 'none'].includes(value)
        },
      },
    },
  }
}

export function size(defaultValue, validator) {
  const sizes = ['2xs', 'xs', 'sm', 'md', 'lg']
  const options = validator || sizes
  return {
    props: {
      size: {
        type: String,
        default: defaultValue || 'md',
        validator: (value) => options.includes(value),
      },
    },
  }
}

export function boolean(name, defaultValue) {
  return {
    props: {
      [name]: {
        type: Boolean,
        default: defaultValue || false,
      },
    },
  }
}
export function string(name, defaultValue, validator) {
  let propOptions = {
    type: String,
    default: defaultValue || 'none',
  }
  if (validator !== undefined) {
    propOptions.validator = (value) => validator.includes(value)
  }
  return {
    props: {
      [name]: propOptions,
    },
  }
}

// function sizeProps(start, end) {
//   const sizes = ['2xs', 'xs', 'sm', 'md', 'lg']
//   return {
//     props: {
//       size: {
//         type: String,
//         default: 'md',
//         validator(value) {
//           return sizes.slice(start, end).includes(value)
//         },
//       },
//     },
//   }
// }

// export const size = sizeProps()
// export const sizeTriple = sizeProps(2, 5)
// export const variant = variantProps('variant')
// export const bgVariant = variantProps('bgVariant', 'light')
// export const textVariant = variantProps('textVariant', 'dark')
// export const borderVariant = variantProps('borderVariant', 'secondary')
// export const filter = filterProps('filter')
// export const borderFilter = filterProps('borderFilter')
// export const bgFilter = filterProps('bgFilter')
// export const textFilter = filterProps('textFilter')

// export const block = {
//   props: {
//     block: {
//       type: Boolean,
//       default: false,
//     },
//   },
// }
// export const rounded = {
//   props: {
//     rounded: {
//       type: Boolean,
//       default: false,
//     },
//   },
// }
// export const roundedFull = {
//   props: {
//     roundedFull: {
//       type: Boolean,
//       default: false,
//     },
//   },
// }
// export const border = {
//   props: {
//     border: {
//       type: Boolean,
//       default: false,
//     },
//   },
// }
// export const prepend = {
//   props: {
//     prepend: {
//       type: String,
//       default: 'none',
//     },
//   },
// }
// export const icon = {
//   props: {
//     icon: {
//       type: String,
//       default: 'none',
//     },
//   },
// }

// export const img = {
//   props: {
//     img: {
//       type: String,
//       default: '',
//     },
//   },
// }

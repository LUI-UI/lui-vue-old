const variantControl = {
  control: { type: 'select' },
  options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
}
const filterControl = {
  control: { type: 'select' },
  options: ['darker', 'lighter', 'none'],
}
export const variant = variantControl
export const bgVariant = variantControl
export const textVariant = variantControl
export const borderVariant = variantControl
export const block = {
  control: { type: 'boolean' },
}
export const rounded = {
  control: { type: 'boolean' },
}
export const roundedFull = {
  control: { type: 'boolean' },
}
export const filter = filterControl
export const bgFilter = filterControl
export const textFilter = filterControl
export const borderFilter = filterControl
export const border = {
  control: { type: 'boolean' },
}
export const img = {
  control: { type: 'select' },
  options: ['', 'https://randomuser.me/api/portraits/men/43.jpg'],
}
export const size = {
  control: { type: 'select' },
  options: ['2xs', 'xs', 'sm', 'md', 'lg'],
}

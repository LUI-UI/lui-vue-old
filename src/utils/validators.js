// Avalaible Tailwind classes:
// export const sizes = [
//   'xs',
//   'sm',
//   'base',
//   'md',
//   'lg',
//   'xl',
//   '2xl',
//   '3xl',
//   '4xl',
//   '5xl',
//   '6xl',
//   '7xl',
//   '8xl',
//   '9xl',
// ]
export function sizeValidator(value, componentName) {
  if (componentName === 'button') {
    return ['sm', 'md', 'lg'].includes(value)
  }
}

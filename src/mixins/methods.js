export function generateClasses(params) {
  const acc = []
  params.map((param) => {
    acc.push(...Object.values(param))
  })
  return acc.join(' ').toString().replace(/\s+/g, ' ')
}
export function generateVariant(variant, filter) {
  const backgroundColor =
    filter === 'none'
      ? `bg-${variant}`
      : filter === 'darker'
      ? `bg-${variant}-800`
      : `bg-${variant}-50`
  const fontColor =
    filter === 'none'
      ? `text-white`
      : filter === 'darker'
      ? `text-${variant}-50`
      : `text-${variant}-800`
  return { backgroundColor, fontColor }
}

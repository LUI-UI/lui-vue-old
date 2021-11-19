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
export function generateColorVariant(variant, filter, property) {
  const colorClasses =
    filter === 'none'
      ? `${property}-${variant}`
      : filter === 'darker'
      ? `${property}-${variant}-800`
      : `${property}-${variant}-50`
  return { colorClasses }
}


  export function generateClasses(params) {
    const acc = []
    params.map((param) => {
      acc.push(...Object.values(param))
    })
    return acc.join(' ').toString().replace(/\s+/g, ' ')
  }


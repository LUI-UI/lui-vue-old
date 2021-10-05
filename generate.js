const fs = require('fs')

console.log('SELAM BEN CALISTIM..', process.argv)
const name = process.argv[2]
const dir = `./src/components/${formatedName(name)}`
const vueTemplate = `<template>
  <div>initil</div>
</template>
<script>
export default {
name: 'Lui${capitalizeFirstLetter(name.toLowerCase())}',
}
</script>

<style lang="postcss" scoped></style>
`

if (typeof name === 'undefined') {
  console.log('please write a name of the file you want to create')
  // throw error
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
function formatedName(name) {
  const lcName = name.toLocaleLowerCase()
  return `lui${capitalizeFirstLetter(lcName)}`
}
console.log(name)

// create folder
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
} else {
  console.log('Already have a folder same name!')
}
// create files
if (fs.existsSync(dir)) {
  fs.writeFile(
    `${dir}/lui-${name.toLocaleLowerCase()}.vue`,
    vueTemplate,
    function (err) {
      if (err) {
        return console.log(err)
      }
      console.log('The file was saved!')
    },
  )
  fs.writeFile(
    `${dir}/lui-${name.toLocaleLowerCase()}.stories.js`,
    'test deneme',
    function (err) {
      if (err) {
        return console.log(err)
      }
      console.log('The file was saved!')
    },
  )
  fs.appendFile(
    './src/components/main.js',
    `\r\nexport { default as Lui${capitalizeFirstLetter(
      name.toLocaleLowerCase(),
    )} } from '../components/${formatedName(
      name,
    )}/lui-${name.toLocaleLowerCase()}.vue ' `,
    function (err) {
      if (err) {
        return console.log(err)
      }
      console.log('The file was saved!')
    },
  )
} else {
  console.log('dosyalari yazmak icin gerkeli klasor yok!')
}
// Create folder in src/components with arg
// Create a vue file in folder
// Create a storybook file in folder
// Export the file in src/components/main js

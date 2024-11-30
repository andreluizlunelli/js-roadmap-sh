import url from 'url'

const urlString = 'https://www.google.com/search?q=hello+world'

// URL Object
const urlObject = new URL(urlString)

console.log(urlObject)

// format
console.log(url.format(urlObject))

// import.meta.url - file URL
console.log(import.meta.url)

// fileURLToPath
console.log(url.fileURLToPath(import.meta.url))

import path from 'path'

const filePath =  './dir1/dir2/test.txt'

// basename
console.log(path.basename(filePath))

// dirname
console.log(path.dirname(filePath))

// extname
console.log(path.extname(filePath))

// parse
console.log(path.parse(filePath))

/* 
 * __filename and __dirname
 * are only available in CommonJS modules
 */



// in ES modules we can use import.meta.ur

const __filename = import.meta.url
const __dirname  = path.dirname(import.meta.url)

console.log(__filename)
console.log(__dirname)



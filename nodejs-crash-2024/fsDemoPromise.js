import fs from 'fs/promises'

fs.readFile('./test.txt', 'utf-8').then((data) => {
    console.log(data)
})
// const data = await fs.readFile('./test.txt', 'utf-8')

// console.log(data)

const writeFile = async () => {
    try {
        await fs.writeFile('./test2.txt', 'Hello World that override the file contents')
    } catch (err) {
        console.error(err)
    }
}

const appendFile = async () => {
    try {
        await fs.appendFile('./test3.txt', '\nThis is a new line')
    } catch (err) {
        console.error(err)
    }
}

appendFile()
appendFile()
appendFile()

writeFile()
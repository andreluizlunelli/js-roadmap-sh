import fs from 'fs'

fs.readFile('./test.txt', (err, data) => {
    if (err) {
        throw err
    }

    console.log(data.toString())
})

const data = fs.readFileSync('./test.txt', 'utf-8')

console.log(data)
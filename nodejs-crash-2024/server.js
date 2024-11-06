import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

const PORT = process.env.PORT

const server = http.createServer(async (request, response) => {
    // response.setHeader('Content-Type', 'text/html')
    // response.write('<h1>Hello World</h1>')
    // response.end()

    const filePath = path.join(__dirname, 'public', 'index.html')

    console.log(filePath)
    console.log(request.url)
    console.log(request.method)
    console.log(import.meta.url)
    console.log(__filename)
    console.log(__dirname)


    const file = await fs.readFile(filePath)

    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write(file)
    response.end()
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
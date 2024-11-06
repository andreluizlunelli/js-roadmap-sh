import http from 'http'

const server = http.createServer((request, response) => {
    // response.setHeader('Content-Type', 'text/html')
    // response.write('<h1>Hello World</h1>')
    // response.end()

    response.writeHead(500, {'Content-Type': 'application/json'})
    response.end(JSON.stringify({
        message: 'Some error bla'
    }))
})

server.listen(3000, () => {
    console.log('Server listening on port 3000')
})
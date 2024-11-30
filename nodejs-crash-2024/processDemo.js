// argv
console.log(process.argv)

// env
console.log(process.env)

// cwd
console.log(process.cwd())

// memory usage
console.log(process.memoryUsage())

// uptime
console.log(process.uptime())

// exit
process.on('exit', (code) => {
    console.log('Bla Exit')
    console.log(`Process exited with code ${code}`)
})
process.exit(1)

// kill
// process.kill(process.pid, 'SIGINT')
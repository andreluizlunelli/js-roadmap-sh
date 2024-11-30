import { EventEmitter } from 'events'

const emitter = new EventEmitter()

function greetHandler(name) {
    console.log('Hello World ' + name)
}

function goodbyeHandler(name) {
    console.log('Goodbye ' + name)
}

// Register Event Listeners
emitter.on('greet', greetHandler)
emitter.on('goodbye', goodbyeHandler)

// Emit Events
emitter.emit('greet', 'John Snow')
emitter.emit('goodbye', 'The Hound')

// error
emitter.emit('error', (err) => {
    console.log('An error occurred: ', err)
})

// simulate error
emitter.emit('error', new Error('An error occurred'))
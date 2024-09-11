const emojis = ['📦', '🥑', '🧠']

function* getEmojis() {
    yield '🛠'

    yield* emojis
}

console.log(...getEmojis())
const emojis = ['📦', '🥑', '🧠']

function* getEmojis() {
    yield '🛠'

    yield* emojis

    // using the yield* syntax the emojis will be flatten
    // instead of: 🛠 [ '📦', '🥑', '🧠' ]
    // yield* does: 🛠 📦 🥑 🧠
}

console.log(...getEmojis())
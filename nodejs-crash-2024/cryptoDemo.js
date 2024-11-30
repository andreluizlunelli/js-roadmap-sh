import crypto from 'crypto'

// create hash
// const sha256 = crypto.createHash('sha256')

// sha256.update('Hello World')

// console.log(sha256.digest('hex'))


// random bytes
// crypto.randomBytes(16, (err, buffer) => {
//     if (err) {
//         throw err
//     }

//     console.log(buffer.toString('hex'))
// })

// create cipheriv and decipheriv
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('Hello World', 'utf8', 'hex')
console.log('encrypted', encrypted)

console.log('----------------')
encrypted += cipher.final('hex')
console.log('encrypted', encrypted)

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted += decipher.final('utf8')

console.log('decrypted', decrypted)
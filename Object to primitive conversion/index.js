function Stark(name) {
    this.name = name

    this.toString = function () {
        return `I am ${this.name} of Starks house.`
    }
}

function Lannister(name) {
    this.name = name

    this[Symbol.toPrimitive] = function (hint) { // hint is the type of conversion that can be: number, string, default
        if (hint === 'string' || hint === 'default') {
            return `I am ${this.name} of Lannisters house.`
        }
    }
}

class Tully {
    constructor(name) {
        this.name = name
    }

    toString() {
        return `I am ${this.name} of Tullys house.`
    }
}

const ned   = new Stark('Ned')
const tywin = new Lannister('Tywin')
const sam   = new Tully('Sam')

console.log("" + ned)
console.log("" + tywin)
console.log("" + sam)

// Here is demonstration of how to convert an object to a primitive
// instead of printing '[object Object]' we wll get
// 'I am Ned of Starks house.'
// 'I am Tywin of Lannisters house.'
// 'I am Sam of Tullys house.'

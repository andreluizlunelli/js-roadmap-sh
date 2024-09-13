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

const ned = new Stark('Ned')
const tywin = new Lannister('Tywin')

console.log("" + ned)
console.log("" + tywin)

// Here is demonstration of how to convert an object to a primitive

// instead of printing '[object Object]'
// we get 'Ned of Starks house'
// and below 'I am Tywin of Lannisters house.'


function dump() { // make this a mixing
    console.log(this)
}

Number.prototype.dd = dump

class MathArray extends Array {
    sum() {
        return this.reduce((a, b) => a + b, 0)
    }

    min() {
        return Math.min(...this)
    }

    max() {
        return Math.max(...this)
    }

    random() {
        return Math.floor(Math.random() * this.max());
    }

    empty() {
        return this.length === 0
    }

    toArray() {
        return [...this]
    }
}

let numbers = new MathArray(1, 2, 3, 4, 5);

numbers.sum().dd()
numbers.min().dd()
numbers.max().dd()
numbers.random().dd()

console.log(numbers.toArray())
console.log(numbers.empty())
console.log(new MathArray().empty())


console.log(MathArray.constructor === Array)
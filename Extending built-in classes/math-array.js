export class MathArray extends Array {
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

    [Symbol.toStringTag] = 'MathArray'
}
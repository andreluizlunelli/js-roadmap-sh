import { MathArray } from './math-array.js'

function dd() { // make this a mixing
    console.log(this)
}

Number.prototype.dd = dd
MathArray.prototype.dd = dd

let numbers = new MathArray(1, 2, 3, 4, 5);

// dump type Number
numbers.sum().dd()
numbers.min().dd()
numbers.max().dd()
numbers.random().dd()

// dump type MathArray
numbers.dd()

console.log(numbers.toArray())
console.log(numbers.empty())
console.log(new MathArray().empty())

console.log(numbers instanceof Array)

let s = Object.prototype.toString;

console.log(s.call(numbers)) //                    normally will print: [object Array]
                             // but now with toStringTag it will print: [object MathArray]
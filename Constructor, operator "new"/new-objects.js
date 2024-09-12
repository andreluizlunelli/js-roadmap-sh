// we can call any function with the "new" operator
// that means that js will create an empty object and assign to it - implicitly
// and then return that object - implicitly

function Person(name, age) {
    this.name = name
    this.age = age

    this.greet = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const arya = new Person('Arya', 17)

arya.greet()

// console.log(arya.greet())

// const john = Person('John Snow', 30)
// will throw an exception - TypeError: Cannot set properties of undefined (setting 'name')
// because the object was created without the "new" operator
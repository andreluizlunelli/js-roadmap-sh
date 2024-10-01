const sayHi = {
    sayHi() {
        console.log(`Hi ${this.name}`)
    }
}

class Person {
    constructor(name) {
        this.name = name
    }
}

Object.assign(Person.prototype, sayHi)

let joao = new Person('João')

joao.sayHi()
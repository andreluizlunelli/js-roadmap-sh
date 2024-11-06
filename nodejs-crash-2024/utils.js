function randomInt() {
    return Math.floor(Math.random() * 100)
}

function celciusToFahrenheit(celcius) {
    return celcius * 1.8 + 32
}

module.exports = { 
    randomInt,
    celciusToFahrenheit,
}
import { memory } from './memory-usage.js';
import { getVeryLargeNumber } from './get-large-number.js';

function* getVeryLargeNumbers() {
    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (const number of range) {
        yield getVeryLargeNumber(number);
    }
}

for (const element of getVeryLargeNumbers()) {}

console.log('with generator');
console.log(memory(process.memoryUsage()));
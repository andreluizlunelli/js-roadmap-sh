import { memory } from './memory-usage.js';
import { getVeryLargeNumber } from './get-large-number.js';

function* getVeryLargeNumbers() {
    const range = [1, 2, 3];

    for (const i of range) {
        const largeNumber = getVeryLargeNumber(i);

        yield [i, largeNumber];
    }
}

for (const [key] of getVeryLargeNumbers()) {
    console.log(key);
}

console.log(memory(process.memoryUsage()));
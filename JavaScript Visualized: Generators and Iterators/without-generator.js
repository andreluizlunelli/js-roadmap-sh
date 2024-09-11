import { memory } from './memory-usage.js';
import { getVeryLargeNumber } from './get-large-number.js';

function getVeryLargeNumbers() {
    const range = [1, 2, 3];

    return range.map(getVeryLargeNumber);
}

for (const number in getVeryLargeNumbers()) {
    console.log(number);
}

console.log(memory(process.memoryUsage()));
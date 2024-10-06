#!/usr/bin/env node

import { quotes } from "./quotes.js";

const inspire = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

console.log(inspire(quotes))
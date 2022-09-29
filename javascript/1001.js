const fs = require('fs');
const input = fs.readFileSync('./inputs/1001.txt', 'utf-8');
const lines = input.split('\r\n');

// Resolução
const a = +lines[0];
const b = +lines[1];
console.log(`X = ${a + b}`);

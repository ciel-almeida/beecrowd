const fs = require('fs');
const input = fs.readFileSync('./inputs/1002.txt', 'utf-8');
const lines = input.split('\r\n');

// Resolução
const PI = 3.14159;
const raio = lines[0];
const area = PI * Math.pow(raio, 2);
console.log(`A=${area.toFixed(4)}`);

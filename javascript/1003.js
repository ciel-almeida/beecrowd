const fs = require('fs');
const input = fs.readFileSync('./inputs/1003.txt', 'utf-8');
const lines = input.split('\r\n');

// 1003 - Soma Simples
// Resolução
const a = +lines[0];
const b = +lines[1];
console.log(`SOMA = ${a + b}`);

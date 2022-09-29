const fs = require('fs');
const input = fs.readFileSync('./inputs/1004.txt', 'utf-8');
const lines = input.split('\r\n');

// 1004 - Produto Simples
// Resolução
const a = Number(lines[0]);
const b = Number(lines[1]);
const prod = a * b;
console.log(`PROD = ${prod}`);

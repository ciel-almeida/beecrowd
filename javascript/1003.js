const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1003 - Soma Simples
// Resolução
const a = +lines[0];
const b = +lines[1];
console.log(`SOMA = ${a + b}`);

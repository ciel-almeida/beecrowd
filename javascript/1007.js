const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1007 - Diferença
// Resolução
const a = +lines[0];
const b = +lines[1];
const c = +lines[2];
const d = +lines[3];
const diferenca = a * b - c * d;
console.log(`DIFERENCA = ${diferenca}`);

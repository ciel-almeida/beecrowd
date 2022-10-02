const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1013 - O maior
// Resolução
const [a, b, c] = lines[0].split(' ').map(number => Number(number));
const maiorPreliminar = (a + b + Math.abs(a - b)) / 2;
const maiorFinal = (maiorPreliminar + c + Math.abs(maiorPreliminar - c)) / 2;
console.log(`${maiorFinal} eh o maior`);

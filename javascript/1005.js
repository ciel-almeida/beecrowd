const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1005 - Média 1
// Resolução
const nota1 = +lines[0];
const nota2 = +lines[1];
const media = (nota1 * 3.5 + nota2 * 7.5) / 11;
console.log(`MEDIA = ${media.toFixed(5)}`);

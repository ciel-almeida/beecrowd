const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1006 - Média 2
// Resolução
const a = parseFloat(lines[0]);
const b = parseFloat(lines[1]);
const c = parseFloat(lines[2]);
const media = (a * 2 + b * 3 + c * 5) / 10;
console.log(`MEDIA = ${media.toFixed(1)}`);

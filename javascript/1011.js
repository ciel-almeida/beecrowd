const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1011 - Esfera
// Resolução
const R = parseFloat(lines[0]);
const PI = 3.14159;
const volume = (4 / 3) * PI * Math.pow(R, 3);
console.log(`VOLUME = ${volume.toFixed(3)}`);

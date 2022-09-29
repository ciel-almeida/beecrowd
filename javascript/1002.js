const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1002 - Área do Círculo
// Resolução
const PI = 3.14159;
const raio = lines[0];
const area = PI * Math.pow(raio, 2);
console.log(`A=${area.toFixed(4)}`);

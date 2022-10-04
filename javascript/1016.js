const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1016 - Distância
// Resolução
const distancia = +lines[0];
console.log(`${distancia * 2} minutos`);

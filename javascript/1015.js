const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1015 - Distância Entre Dois Pontos
// Resolução
const [x1, y1] = lines[0].split(' ').map(number => parseFloat(number));
const [x2, y2] = lines[1].split(' ').map(number => parseFloat(number));
const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(distancia.toFixed(4));

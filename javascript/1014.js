const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1014 - Consumo
// Resolução
const [distancia, consumo] = lines.map(number => parseFloat(number));
const consumoMedio = distancia / consumo;
console.log(`${consumoMedio.toFixed(3)} km/l`);

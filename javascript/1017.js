const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1017 - Gasto de Combustível
// Resolução
const [duracaoViagem, velocMedia] = lines.map(input => Number(input));
const consumoCarro = 12;
const distanciaPercorrida = duracaoViagem * velocMedia;
const litrosNecessarios = distanciaPercorrida / consumoCarro;
console.log(litrosNecessarios.toFixed(3));

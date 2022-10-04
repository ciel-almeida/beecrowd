const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1019 - Conversão de Tempo
// Resolução
const horas = Math.floor(+lines[0] / 3600);
const minutos = Math.floor((+lines[0] % 3600) / 60);
const segundos = (+lines[0] % 3600) % 60;
console.log(`${horas}:${minutos}:${segundos}`);

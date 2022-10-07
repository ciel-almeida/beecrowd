const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1041 - Coordenadas de um Ponto
// Resolução
const [x, y] = lines[0].split(' ').map(n => parseFloat(n));

if (x === 0.0 && y === 0.0) {
	console.log('Origem');
} else if (x === 0) {
	console.log('Eixo Y');
} else if (y === 0) {
	console.log('Eixo X');
} else if (x > 0.0 && y > 0.0) {
	console.log('Q1');
} else if (x < 0.0 && y > 0.0) {
	console.log('Q2');
} else if (x < 0.0 && y < 0.0) {
	console.log('Q3');
} else if (x > 0.0 && y < 0.0) {
	console.log('Q4');
}

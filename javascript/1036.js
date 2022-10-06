const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1036 - Fórmula de Bhaskara
// Resolução
const [A, B, C] = lines[0].split(' ').map(numb => parseFloat(numb));
const delta = Math.pow(B, 2) - 4 * A * C;
if (A !== 0 && delta > -1) {
	const R1 = (-B + Math.sqrt(delta)) / (2 * A);
	const R2 = (-B - Math.sqrt(delta)) / (2 * A);

	console.log(`R1 = ${R1.toFixed(5)}`);
	console.log(`R2 = ${R2.toFixed(5)}`);
} else {
	console.log('Impossivel calcular');
}

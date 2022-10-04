const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1018 - Cédulas
// Resolução
let dinheiro = +lines[0];
console.log(dinheiro);

const notas = [100, 50, 20, 10, 5, 2, 1];
const notasDeTroco = notas.map(nota => {
	const resultado = Math.floor(dinheiro / nota);
	dinheiro = dinheiro % nota;
	return resultado >= 1 ? resultado : 0;
});

notasDeTroco.forEach((qtdNota, index) => {
	console.log(`${qtdNota} nota(s) de R$ ${notas[index]},00`);
});

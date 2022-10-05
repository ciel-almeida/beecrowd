const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1021 - Notas e Moedas
// Resolução
let dinheiro = +lines[0];

console.log('NOTAS:');
const notas = [100, 50, 20, 10, 5, 2];
const notasDeTroco = notas.map(nota => {
	// Dividindo o dinheiro total pela nota atual
	const resultado = Math.floor(dinheiro / nota);
	// Resto da divisão
	dinheiro = dinheiro % nota;
	// Se a nota atual não for capaz de dividir, retorna 0
	return resultado >= 1 ? resultado : 0;
});
notasDeTroco.forEach((qtdNota, index) => {
	console.log(`${qtdNota} nota(s) de R$ ${notas[index]}.00`);
});

console.log('MOEDAS:');
// Multiplicando dinheiro atual por 100 para tratar divisoes com inteiros
dinheiro = dinheiro * 100;
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
const moedasDeTroco = moedas.map(moeda => {
	// Multiplicando moedas por 100 para tratar divisoes com inteiros
	moeda = moeda * 100;
	let resultado = Math.floor(dinheiro / moeda);
	dinheiro = dinheiro % moeda;
	return resultado >= 1 ? resultado : 0;
});
moedasDeTroco.forEach((qtdMoeda, index) => {
	console.log(`${qtdMoeda} moeda(s) de R$ ${moedas[index].toFixed(2)}`);
});

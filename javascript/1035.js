const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1035 - Teste de Seleção 1
// Resolução
const [A, B, C, D] = lines[0].split(' ').map(number => Number(number));

const sucesso = 'Valores aceitos';
const falha = 'Valores nao aceitos';

if (B > C && D > A) {
	if (C + D > A + B) {
		if (C >= 0 && D >= 0) {
			if (A % 2 === 0) {
				console.log(sucesso);
			} else {
				console.log(falha);
			}
		} else {
			console.log(falha);
		}
	} else {
		console.log(falha);
	}
} else {
	console.log(falha);
}

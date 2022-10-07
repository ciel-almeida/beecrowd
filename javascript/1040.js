const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1040 - Média 3
// Resolução
const [n1, n2, n3, n4] = lines[0].split(' ').map(nota => parseFloat(nota));
const notaRecuperacao = parseFloat(lines[1]);
const peso = [2, 3, 4, 1];
const media = (n1 * peso[0] + n2 * peso[1] + n3 * peso[2] + n4 * peso[3]) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
	console.log('Aluno aprovado.');
} else if (media < 5.0) {
	console.log('Aluno reprovado.');
} else if (media < 7.0 && media >= 5.0) {
	console.log('Aluno em exame.');
	console.log(`Nota do exame: ${notaRecuperacao.toFixed(1)}`);

	const mediaFinal = (media + notaRecuperacao) / 2;

	if (mediaFinal >= 5.0) {
		console.log('Aluno aprovado.');
	} else if (mediaFinal < 5.0) {
		console.log('Aluno reprovado.');
	}
	console.log(`Media final: ${mediaFinal.toFixed(1)}`);
}

// const [x1, x2, x3, x4] = lines[0].split(' ');
// const notaExame = parseFloat(lines[1]);

// const Media = (x1 * 2 + x2 * 3 + x3 * 4 + parseFloat(x4)) / 10;

// console.log(`Media: ${Media.toFixed(1)}`);

// if (Media >= 7.0) {
// 	console.log('Aluno aprovado.');
// } else if (Media < 5.0) {
// 	console.log('Aluno reprovado.');
// } else {
// 	console.log('Aluno em exame.');
// 	console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
// 	const mediaFinal = (notaExame + Media) / 2;
// 	if (mediaFinal >= 5.0) {
// 		console.log('Aluno aprovado.');
// 	} else {
// 		console.log('Aluno reprovado.');
// 	}
// 	console.log(`Media final: ${mediaFinal.toFixed(1)}`);
// }

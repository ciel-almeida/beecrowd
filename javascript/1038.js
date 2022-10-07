const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1038 - Lanche
// Resolução
const [codigo, quantidade] = lines[0].split(' ').map(n => Number(n));
let preco;
switch (codigo) {
	case 1:
		preco = 4.0;
		break;
	case 2:
		preco = 4.5;
		break;
	case 3:
		preco = 5.0;
		break;
	case 4:
		preco = 2.0;
		break;
	case 5:
		preco = 1.5;
		break;
	default:
		console.log('Código não identificado.');
		break;
}
console.log(`Total: R$ ${(quantidade * preco).toFixed(2)}`);

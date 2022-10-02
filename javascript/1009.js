const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1009 - Salário com bônus
// Resolução
const nome = lines[0];
const salario = +lines[1];
const totalVendas = +lines[2];
const valorComissoes = totalVendas * 0.15;
const salarioRecebido = salario + valorComissoes;
console.log(`TOTAL = R$ ${salarioRecebido.toFixed(2)}`);

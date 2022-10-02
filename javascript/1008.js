const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1008 - Salário
// Resolução
const idFuncionario = +lines[0];
const horasTrabalhadas = +lines[1];
const valorHora = +lines[2];
const salario = horasTrabalhadas * valorHora;
console.log(`NUMBER = ${idFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);

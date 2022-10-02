const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1010 - Cálculo Simples
// Resolução
const infoProd1 = lines[0].split(` `);
const infoProd2 = lines[1].split(` `);
const qtdProd1 = +infoProd1[1];
const valorUnidProd1 = +infoProd1[2];
const qtdProd2 = +infoProd2[1];
const valorUnidProd2 = +infoProd2[2];
const valorTotal = qtdProd1 * valorUnidProd1 + qtdProd2 * valorUnidProd2;
console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);

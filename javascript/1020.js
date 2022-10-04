const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1020 - Idade em Dias
// Resolução
const idadeEmDias = +lines[0];
const anos = Math.floor(idadeEmDias / 365);
const meses = Math.floor((idadeEmDias % 365) / 30);
const dias = Math.floor((idadeEmDias % 365) % 30);
console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);

const fs = require('fs');
const path = require('path');
const currentFileName = path.parse(__filename).name;
const input = fs.readFileSync(`./inputs/${currentFileName}.txt`, 'utf-8');
const lines = input.split('\r\n');

// 1012 - Área
// Resolução
const PI = 3.14159;
const [A, B, C] = lines[0].split(' ').map(number => parseFloat(number));

// Calculos
const areaTriangRetang = (A * C) / 2;
const areaCirculo = PI * Math.pow(C, 2);
const areaTrapezio = ((A + B) * C) / 2;
const areaQuadrado = B * B;
const areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangRetang.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);

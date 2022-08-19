/* 

Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). 
A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159

*/

var raio = 3
var pi = 3.14159

var volume = (4/3) * pi * Math.pow(raio, 3)

console.log(`O volume de um círculo com ${raio} é igual a ${volume.toFixed(2)}`)
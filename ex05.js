/* 

Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. 
A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C 
tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

*/

var nota1 = 5  
var nota2 = 6
var nota3 = 7

var nota1peso = (nota1 * 2)
var nota2peso = (nota2 * 3)
var nota3peso = (nota3 * 5)


var mediatotal = (nota1peso + nota2peso + nota3peso) / 10
console.log(`A média geral é de ${mediatotal}`)
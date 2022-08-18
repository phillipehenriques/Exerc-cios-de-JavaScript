/* 

Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, 
com duas casas decimais.

*/

var fixo = 500
var totalvendas = 1230

var comissao = totalvendas * 15 / 100
var totalsalario = fixo + comissao

console.log(`O funcionário João vendeu R$${totalvendas} este mês.
Somando com seu salário de R$${fixo} temos R$${totalsalario} este mês.`)
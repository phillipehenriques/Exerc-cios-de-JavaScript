var fixo = 500
var totalvendas = 1230

var comissao = totalvendas * 15 / 100
var totalsalario = fixo + comissao

console.log(`O funcionário João vendeu R$${totalvendas} este mês.
Somando com seu salário de R$${fixo} temos R$${totalsalario} este mês.`)
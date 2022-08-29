//Retorne pessoas com 5 ou mais letras.
//Retorne pessoas com mais de 50 anos.
//Retorne cujo nome termina com A.

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const bigName = pessoas.filter(obj => obj.nome.length >=5);
const age = pessoas.filter(idoso => idoso.idade > 50);
console.log(age)

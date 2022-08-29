const pessoas = [
    { id: 1, nome: 'Luiz', idade: 62 },
    { id: 2, nome: 'Maria', idade: 23 },
    { id: 3, nome: 'Eduardo', idade: 55 },
    { id: 4, nome: 'Letícia', idade: 19 },
    { id: 5, nome: 'Rosana', idade: 32 },
    { id: 6, nome: 'Wallace', idade: 47 },
];
const buscar = pessoas.findIndex(item => item.idade == 23);
console.log(buscar);

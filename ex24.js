function  aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

// função para gerar um tempo aleatório com base no valor maximo
// e mínimo. Por exemplo (1, 3) > nesse caso o tempo será entre
// 1 segundo e 3 segundos.

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(msg)
    }, tempo)    
    })
}

// a function esperaAi, precisará de uma frase e um tempo.
// O tempo vem da função aleatorio e a frase retorna de cada volta,
// que um .then realizar quando chamarmos a função esperaAI como
// no exemplo a baixo.

esperaAi('Frase 1', aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 2', aleatorio(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 3', aleatorio(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .catch()

// .then() é chamado caso o resolve seja positivo.
// . catch() é chamado caso o reject seja positivo.

console.log('Isso será exibido, antes da resolução das Promisses')
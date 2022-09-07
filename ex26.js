function  aleatorio(min = 0, max = 3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(typeof msg !== 'string') {
            reject('CAI NO ERRO')
            return
        }

        resolve(msg.toUpperCase() + '- Passei na promise')
        return
    }, tempo)    
    })
}

esperaAi('Fase 1', aleatorio())
    .then(valor => {
        console.log(valor)
        return esperaAi('Fase 2', aleatorio())
    })
    .then(fase => {
        console.log(fase)
        return esperaAi('Fase 3', aleatorio())
    })
    .then(fase => {
        console.log(fase)
        return esperaAi('Pipoca', aleatorio())
    })
    .then(fase => {
        console.log('Terminamos na fase', fase)
    })
    .catch(e => console.log(e))
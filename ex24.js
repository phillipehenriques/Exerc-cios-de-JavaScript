function  aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(msg)
        resolve()
    }, tempo)    
    })
}

esperaAi('Frase 1', aleatorio(1, 3))
esperaAi('Frase 2', aleatorio(1, 3))
esperaAi('Frase 3', aleatorio(1, 3))

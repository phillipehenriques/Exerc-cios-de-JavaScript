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

async function executa() {
    try {
        const fase1 = await esperaAi('Fase1', aleatorio())
        console.log(fase1)

        const fase2 = await esperaAi('Fase2', aleatorio())
        console.log(fase2)

        const fase3 = await esperaAi('Fase3', aleatorio())
        console.log(fase3)

        console.log('Teminamos na fase:', fase3)
    } catch(error) {
        console.log(error)
    }
}

executa()

console.log('Isso vem antes')
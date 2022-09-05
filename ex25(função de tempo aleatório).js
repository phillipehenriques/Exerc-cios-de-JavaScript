function  aleatorio(min, max) {
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

// Essa função (espera ai) simula um modelo de dia a dia, aonde não
// saberíamos quanto tempo um valor demoraria para retornar para a gente.

// Essa função gera um número aleatório com base nos segundos que você quer .. 
// e resolve ou rejeita o dado que foi colhido.
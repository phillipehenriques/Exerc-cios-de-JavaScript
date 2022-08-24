var Carlos = {
        sobreBolo() {
            console.log('Eu não gosto de bolo de laranja sem cobertura!')
        },
        sobreCarro() {
            console.log('Já teve um carro, e ele era vermelho ..')
        },
        sobreMusica() {
            console.log('Eu amo ouvir MPB!')
        }
}

Carlos.sobreBolo()

// alternativa

var Carlos = {
    sobreBolo: 'Não gosta de bolo de laranja sem cobertura!',
    sobreCarro: 'Já teve um carro, e ele era vermelho ..',
    sobreMusica: 'Ele ama ouvir MPB.'
}

var Monica = {
    sobreBolo: 'Odeia bolo, mas gosta de pavê!',
    sobreCarro: 'Nunca dirigiu carro, só ônibus ..',
    sobreMusica: 'Ouve bossa nova!'
}

var Henrique = {
    sobreBolo: 'Gosta de bolo de morango com creme.',
    sobreCarro: 'Nunca tirou CNH, anda de bike!',
    sobreMusica: 'Adora Heavy Metal!',
    boloCarro: 'Gosta de bolo de morango com creme. Nunca tirou CNH, anda de bike!'
}

var pessoas = [Carlos, Monica, Henrique]

// var PerguntaBolo = pessoas.find(x => x.sobreBolo)

// let RespostaBolo = console.log(pessoas.sobreBolo)

// ------------------------

var ret = pessoas.map(x => {
    return x.sobreBolo + x.sobreCarro
})

pessoas.forEach(x => {
    if("parametro que o cara mandou no terminal" == "bolo") {
        console.log(x.sobreBolo)
    }
})

console.log(Carlos.sobreBolo)

// ------------------------

console.log(opiniaoSobreBolo)

function map(callbackfn) {
    var batata = callbackfn.execute();
    return batata
}

function forEach(callbackfn) {
   callbackfn.execute();
}
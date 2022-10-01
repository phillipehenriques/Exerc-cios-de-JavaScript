// Estudando React na parta MAIN.JS

// objetos 

const user = {
    name: 'Phillipe',
    idade: 30,
    address: {
        street: 'Rua Porto Feliz',
        number: 243,
    }
}

//desestrutuação

// const name = user.name < método simples

const { address, idade: age, nickname = 'Pharanoia' } = user

document.body.innerText = JSON.stringify({ address, age, nickname })
// criando uma pessoa

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }

    dormir() {
        console.log(`${this.nome} está dormindo`)
    }
}

const p1 = new Pessoa('Luiz', 'Miranda')
console.log(p1.comer())
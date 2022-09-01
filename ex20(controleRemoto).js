class Cachorro {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    latir() {
        return 'au au'
    }
    rolar() {
        return 'rolando'
    }
}

const maya = new Cachorro('Maya', 2)

console.log(maya.latir())

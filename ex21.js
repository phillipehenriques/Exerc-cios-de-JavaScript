class ControleCarro {
    constructor(ecoSport) {
        this.carro = 'ecoSport'
        this.fechadura = 0        
    }

    destrancado() {
        this.fechadura = console.log(`Esse ${this.carro} está destrancado.`)
    }

    trancado() {
        this.fechadura = console.log(`Esse ${this.carro} está trancado.`)
    }

    alarme() {
        this.alarme = console.log(`Esse ${this.carro} está sendo roubado.`)
    }
}

const meuCarro = new ControleCarro

meuCarro.destrancado()
meuCarro.trancado()
meuCarro.alarme()

console.log(meuCarro.destrancado)
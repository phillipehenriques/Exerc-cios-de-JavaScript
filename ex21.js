class ControleCarro {
    constructor(modelo) {
        this.modelo = modelo
        this.fechadura = 0        
    }

    trancarOuDestrancar(trancado) {
        if(trancado === true) {
            console.log(`O carro ${this.modelo} está trancado`)
        } else {
            console.log(`O carro ${this.modelo} está destrancado`)
        }
    }

    alarme() {
           console.log(`Esse ${this.carro} está sendo roubado.`) 
        // se não colocar o NEW ele não consegue acessar o constructor < e não consegue puxar nenhum método dentro da classe.
    }
}

const meuCarro = new ControleCarro('ecoSport')


meuCarro.trancarOuDestrancar(true)



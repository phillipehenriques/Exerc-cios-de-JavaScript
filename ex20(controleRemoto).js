class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
        this.canal = 1
    }

    aumentarVolume() {
        this.volume += 1
    }

    diminuirVolume() {
        this.volume -= 1
    }

    deixarMudo() {
        this.volume = 0
    }

    trocarCanalParaFrente() {
        this.canal += 1
    }

    trocarCanalParaTrás() {
        this.canal -= 1
    }

    abrirMenu() {
        console.log(`A tv de marca ${this.tv} está no menu`)
    }
}

const controleSlim = new ControleRemoto('LG')

controleSlim.trocarCanalParaFrente()
controleSlim.trocarCanalParaFrente()
controleSlim.trocarCanalParaFrente()
controleSlim.aumentarVolume()
controleSlim.aumentarVolume()
controleSlim.deixarMudo()

console.log(controleSlim)


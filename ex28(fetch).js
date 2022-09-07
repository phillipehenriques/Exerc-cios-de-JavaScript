fetch('paginaComErro.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('NOT FOUND 404')
        return resposta.text()
    })
    .then(html => console.log(html))
    .catch(e => console.error(e))

    // exemplo de fetch retornando mensagem de erro
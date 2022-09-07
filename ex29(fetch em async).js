async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href')
        const responde = await tech(href)

        if(response.status !== 200) throw new Error('ERRO 404')

        const html = await response Text()
        carregaResultado(html)
    } catch {
        console.log(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

// EXEMPLO de fetch em um async
function verificarChute(chute) {
    const numero = +chute

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class="voce-acertou">Você acertou!</h2>
            <h3 class="resposta-certa">O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        mensagemAbaixo.innerHTML += `
            <div class="dica-numero">O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else if (numero < numeroSecreto) {
        mensagemAbaixo.innerHTML += `
            <div class="dica-numero">O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

    if(chuteInvalido(numero)) {
        mensagemAbaixo.innerHTML += `
            <div>
                Valor inválido
            </div>
        `
        return    
    }

    if(numero > maiorValor || numero < menorValor) {
        mensagemAbaixo.innerHTML += `
            <div>
                Valor inválido. Selecione um valor entre ${menorValor} e ${maiorValor}
            </div>
        `
        return
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
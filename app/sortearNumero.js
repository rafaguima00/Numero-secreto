const menorValor = 1
const maiorValor = 1000
var numeroSecreto = gerarValorAleatorio()

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor

function gerarValorAleatorio() {
    return parseInt(Math.random() * maiorValor) + 1
}

console.log(numeroSecreto)

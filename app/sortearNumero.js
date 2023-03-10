const menorValor = 5
const maiorValor = 200




let numeroSecreto = gerarNumeroAleatorio() 

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)


const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
//Maior e menor Valor//

const menorValor = 1 
const maiorValor = 1000

const numeroSecreto = gerarNumeroAleatorio()

//Função para gerar número Pseudo-aleatório//

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Numero Secreto:', numeroSecreto)

//Exibir maior e menor valor//

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
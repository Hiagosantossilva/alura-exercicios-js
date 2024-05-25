essaPalavraEUmPalindromo();
function essaPalavraEUmPalindromo () {
    var palavra = "rever";
    var separandoAsLetrasDaPalavra = palavra.split("");
    console.log(separandoAsLetrasDaPalavra);
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
        if(palavra == palavraInvertida){
            console.log("A palavra " + palavra + " é um plíndromo!");
        } else {
            console.log("A palavra " +  palavra + " não é um palíndromo!")
        };
}

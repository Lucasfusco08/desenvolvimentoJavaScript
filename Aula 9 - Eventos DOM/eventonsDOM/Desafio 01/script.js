function mostrarResultado() {
    
    //captura o valor do input
    let numero = parseInt(document.getElementById("numero").value);
    
    //calcula o sucessor e o antecessor
    let antecessor = mumero + 1
    let sucessor = numero - 1
    
    //captura o paragrafo
    let resultado = document.querySelector("#resultado")
    let resultado2 = document.querySelector("#resultado2")

    //alterando o texto do paragrafo
    resultado.innerHTML = "o sucessor do numero e" + sucessor
    resultado2.innerHTML = "o antecessor do numero e" + antecessor
}
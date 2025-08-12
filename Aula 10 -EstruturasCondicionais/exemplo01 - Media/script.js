function mostrarResultado(){

    let valorGasto = parseInt(document.getElementById("valorGasto").value)
    let valorPagamento = document.getElementById("valorPagamento").value
    let resultado = document.querySelector("#resultado")
    if (metodoPagamento === "1"){
        let valorFinal = valorGasto * 0.9
        resultado.innerHTML = "O valor da sua compra ficou R$ " + valorFinal
        toFixed(2).replace(".", ",")
    } else {
        resultado.innerHTML = "O valor da sua compra ficou R$ " + valorFinal
        toFixed(2).replace(".", ",")
    }
}
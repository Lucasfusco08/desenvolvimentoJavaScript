function mostrarResultado(){
    let velocidade = parseInt (document.querySelector("#velocidade").value)
    let velocidadeMaxima = 80
    let valorMulta = 7
    let resultado = document.querySelector("#resultado")
    if(velocidade > velocidadeMaxima){
        let velocidadeTotal = velocidade - velocidadeMaxima
        let multa = velocidadeTotal * valorMulta
        resultado.innerHTML = "sua multa foi de " + multa + "R$"
    } else {
       resultado.innerHTML = "parabéns você não foi multado "
    }
    }
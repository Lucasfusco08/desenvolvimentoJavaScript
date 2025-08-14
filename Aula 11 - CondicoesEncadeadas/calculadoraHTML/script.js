function mostrarResultado (){

    let numero1 = parseInt (document.querySelector ("#numero1").value)
    let numero2 = parseInt (document.querySelector ("#numero2").value)
    let calculadora = document.querySelector("#calculadora").value
    let resultado = document.querySelector("#resultado")
    let calculo = 0

    if(calculadora ==="*"){
        calculo = numero1 * numero2
        resultado.innerHTML = "A multiplicação ficou " + calculo
    
    }else if(calculadora ==="/"){
        calculo = numero1 / numero2
        resultado.innerHTML = "A divisão ficou " + calculo
    
    }else if(calculadora ==="-"){
        calculo = numero1 - numero2
        resultado.innerHTML = "A subtração ficou " + calculo
    }else {
        calculo = numero1 + numero2
        resultado.innerHTML = "A Soma ficou " + calculo
    }
}
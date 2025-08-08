function mostrarResultado() {
   
    let numero = parseInt(document.querySelector("#numero").value)

    let dobro = numero * 2
    let triplo = numero * 3
    let raizQuadrada = Math.sqrt(numero)

    let paragrafoDobro = document.querySelectorAll("P")[0]
    let paragrafoTriplo = document.querySelectorAll("P")[1]
    let paragrafoRaiz = document.querySelectorAll("P")[2]

    paragrafoDobro.innerHTML = "O dobro é igual a " + dobro
    paragrafoTriplo.innerHTML = "O triplo é igual a " + triplo
    paragrafoRaiz.innerHTML = "A raiz é igual a " + raizQuadrada.toFixed(2)
}
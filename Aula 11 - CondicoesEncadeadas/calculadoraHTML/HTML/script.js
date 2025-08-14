function mostrarResultado() {
    let ladoA = parseInt(document.querySelector("#lado1").value)
    let ladoB = parseInt(document.querySelector("#lado2").value)
    let ladoC = parseInt(document.querySelector("#lado3").value)


    let ladoAB = ladoA + ladoB 
    let ladoAC = ladoA + ladoC
    let ladoBC = ladoB + ladoC

    if (ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA){

        console.log("LADOS VÁLIDOS PARA FORMAR UM TRIÂNGULO");

        if (ladoA == ladoB && ladoB == ladoC) {
            tipoTriangulo.innerHTM = "EQUILÁTERO";
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
            tipoTriangulo.innerHTML = "ISÓSCELES";
        } else if (ladoA != ladoB != ladoC){
            tipoTriangulo.innerHTML = "ESCALENO";
        }
    } 
    else {
        tipoTriangulo.style.display = "none"
        console.log = "NÃO FOI POSSÍVEL FORMAR UM TRIÂNGULO";
}
}
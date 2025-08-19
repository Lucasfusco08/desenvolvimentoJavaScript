const input = require("prompt-sync")();
let soma = 0
for(let i = 1; i <= 3; i++){
    let numero = parseInt(input("Digite um valor: "))
    if (numero % 2 === 1 && numero/3 === 0){
        soma = numero + soma
    console.log(numero);
    } else{
        console.log("Não foi possível somar este numero")
    }
}

console.log(soma)
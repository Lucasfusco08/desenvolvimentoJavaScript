//variavel composta 
let produto = {
    tipo: "Notebook",
    preo: 3500,
    marca: "Positivo",
    processador: "Intel Celeron",
    emEstoque: true
}

console.log(produto)

//Exibir a informação de um item no objeto
console.log(produto.marca) //positivo
console.log(produto.preco) //positivo
console.log(produto["tipo"]) //Notebook
console.log(produto["processador"]) //Intel Celeron

//Adicionar itens no objeto
produto.memoriaRam = "4 gb"
console.log(produto)

//Remove item
delete produto.emEstoque
console.log(produto)
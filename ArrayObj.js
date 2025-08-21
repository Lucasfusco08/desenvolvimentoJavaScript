let = produtos = [
    {tipo: "Notebook", preco: 5000, categoria: "Eletrônico"},
    {tipo: "Teclado", preco: 200, categoria: "Periférico"},
    {tipo: "Mouse", preco: 80, categoria: "Periférico"},
    {tipo: "Computador", preco: 5000, categoria: "Eletônico"},
    {tipo: "Monitor", preco: 80, categoria: "Eletônico"},
    {tipo: "Fone", preco: 200, categoria: "Periférico"},
    {tipo: "Microfone", preco: 300, categoria: "Periférico"},
    {tipo: "Processador", preco: 3100, categoria: "Processador"},
    {tipo: "Placa de Vídeo", preco: 2000, categoria: "Eletrônico"},
    {tipo: "Mouse Pad", preco: 50, categoria: "Periférico"}
]

//Array Produtos
produtos.forEach((produto) =>{
    console.log(produto.tipo + " R$" + produto.preco);
})

// Filtro
const produtosEletronicos = produtos.filter(produto => produtos.categoria === "Eletrônico m")
console.log("PRODUTOS ELETRÔNICOS")
produtosEletronicos.forEach((produto) => {
    console.log(produto.tipo + " R$" + produto.preco);
})

//Map
const produtosEletronicosDescontos = produtosEletronicos.map(produto => ({

    tipo: produto.tipo,
    preco: produto.preco * 0.95,
    categoria: produtos.categoria
}))
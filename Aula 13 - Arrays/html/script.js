let tarefas = []

function adcionarTarefa() {
    var tarefa = document.getElementById("nova-tarefa").value
    if (tarefa) {
        tarefas.push(tarefa)
        exibeTarefas()
        tarefa = ""
    }
    console.log(tarefas);

}

function exibeItens(){
    let listasTarefas = document.getElementById("lista-tarefa")
    listasTarefas.innerHTML =""
    listasTarefas.forEah((tarefa) => {
        let li = document.createElement("li")
        li.innerHTML = tarefa
        listasTarefas.appendChild(li)
    })
}
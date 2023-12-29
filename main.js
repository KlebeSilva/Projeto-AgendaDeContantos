let Nome = document.getElementById("nome");
let Telefone = document.getElementById("telefone");
let nomeInput = [];
let telefoneInput = [];

let Linhas = "";

const myButonn = document.getElementById("formulario");

myButonn.addEventListener("submit", function(e) {
    e.preventDefault();

    let Tabela = `<tr><td>${Nome.value}</td><td>${Telefone.value}</td></tr>`
    nomeInput.push(Nome.value)
    telefoneInput.push(Telefone.value)

    Linhas += Tabela

    let inserirNaTabela = document.getElementById("tabela-inserir")
    inserirNaTabela.innerHTML = Linhas
    somaTotal()

    Telefone.value = "";
    Nome.value = "";

});

function somaTotal() {
    let contato = document.getElementById("contatos-total");
    contato.innerHTML = `${nomeInput.length} Contatos`
}


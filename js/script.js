document.getElementById("sendButton").addEventListener("click", validaFormulario)

// 1. string é um texto
// 2. funções são blocos de código específicos
// 3. variaveis são gavetas que guardamos códigos para
// serem usados posteriormente
// var nomeVariavel = valor;

var nome = prompt("Qual é o seu nome?")
alert(nome + ", seja bem vinde!")

// vars são usadas para guardarmos informações
// que podemos usar no futuro

function validaFormulario(){

    if(document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" && 
    document.getElementById("telefone") != ""){

        alert("Ok! Você receberá novidades por e-mail :)")

    } else {

        alert("Escreva seu nome, e-mail e telefone.")

    }

}

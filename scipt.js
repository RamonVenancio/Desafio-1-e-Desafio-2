function validacaoFormulario () {
    event.preventDefault();
    var vinculo = document.getElementById("vinculo").value;
    var titulo = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value;
    var edicao = document.getElementById("edicao").value;
    var issn = document.getElementById("issn").value;
    var ano = document.getElementById("ano").value;
    var editora = document.getElementById("editora").value;

    if(vinculo !== "Docente" && vinculo !== "Discente" && vinculo !== "Técnico"){
        alert("O Campo Vinculo está incorreto ou não preenchido, Campo Obrigatório!");
        return false;
    }

    if(titulo == ""){
        alert("O campo Título está sem informações, Campo Obrigatório!");
        return false;
    }

    if(autor == ""){
        alert("O campo Autor está sem informações, Campo Obrigatório!");
        return false;
    }

    if(ano != ""){
        if(ano < 1900){
            alert("O ano deve ser maior ou igual a 1900!");
            return false;
        }else if(ano > 2019){
            alert("O ano deve ser menor ou igual a 2019!");
            return false;
        }
    }
    
    addLivro();
    return true
    
}

function addLivro() {

    var vinculo = document.getElementById("vinculo").value;
    var autor = document.getElementById("autor").value;
    var issn = document.getElementById("issn").value;
    var editora = document.getElementById("editora").value;
    var titulo = document.getElementById("titulo").value;
    var edicao = document.getElementById("edicao").value;
    var ano = document.getElementById("ano").value;
        
    var table = document.getElementById("livros");
    var row = table.insertRow();
    row.innerHTML = "<td>" + vinculo + "</td><td>" + titulo + "</td><td>" + autor + "</td><td>" + edicao + "</td><td>" + issn + "</td><td>" + ano + "</td><td>" + editora + "</td>";
    
    document.getElementById("vinculo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("issn").value = "";
    document.getElementById("editora").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("edicao").value = "";
    document.getElementById("ano").value = "";
  }

const tabela = document.querySelector('#livros');

tabela.addEventListener('dblclick', function(event) {

  const linha = event.target.parentNode;
  
  linha.parentNode.removeChild(linha);
});



function startTimer() {
    var minutes = 59;
    var seconds = 59;

    document.getElementById("timer").innerHTML =  minutes + ":" + seconds;

    var timer = setInterval(function() {
        seconds--;
        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }

        document.getElementById("timer").innerHTML =  minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

        if (minutes == 0 && seconds == 0) {
            clearInterval(timer);
            document.getElementById("myForm").disabled = true;
            alert("Tempo esgotado! Formulário desabilitado.");
        }
    }, 1000);
}

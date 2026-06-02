// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var id = sessionStorage.ID_USUARIO;
    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function validarSessaoAdmin() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var id = sessionStorage.ID_USUARIO;

  if (!sessionStorage.EMAIL_USUARIO) {
    window.location = "/quizes/quiz_sem_login.html";
} else if (sessionStorage.ID_USUARIO == 1) {
    window.location = "/dashboard/dash_quiz_geral.html";
} 
    
}

function validarAcessoDashboard() {

    if (!sessionStorage.EMAIL_USUARIO) {
        window.location = "/quizes/quiz_sem_login.html";
    }

    else if (sessionStorage.ID_USUARIO != 1) {
        window.location = "/quizes/quiz_pagina_inicial.html";
    }

}


function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


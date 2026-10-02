const form = document.getElementById("form-login");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const erroEmail = document.getElementById("erro-email");
const erroSenha = document.getElementById("erro-senha");
const mensagemForm = document.getElementById("mensagem-form");

function emailValido(valor) {
    const padrao =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(valor);
}

function mostrarErro(campo, spanErro, texto) {
    spanErro.textContent = texto;
    campo.classList.remove("invalido");
}

function limparErro(campo, spanErro) {
    spanErro.textContent = "";
    campo.classList.remove("invalido");
}

form.addEventListener("submit", function (event) {
    evento.preventDefault();
    mensagemForm.textContent = "";

    let formularioOk = true;
    const email = campoEmail.value.trim();
    const senha = campoSenha.value;

    if (email === "") {
        mostrarErro(campoEmail, erroEmail, "O campo de e-mail é obrigatório! ");
        formularioOk = false;
    } else if (!emailValido(email)) {
        mostrarErro(campoEmail, erroEmail, "O e-mail informado não é válido! ");
        formularioOk = false;
    } else {
        limparErro(campoEmail, erroEmail);
    }

    if(senha === "") {
        mostrarErro(campoSenha, erroSenha, "O campo de senha é obrigatório! ");
        formularioOk = false;
    } else if (senha.length < 6) {
        mostrarErro(campoSenha, erroSenha, "A senha deve ter no mínimo 8 caracteres! ");
        formularioOk = false;
    } else {
        limparErro(campoSenha, erroSenha);
    }
    if (formularioOk) {
        mensagemForm.textContent = "Login realizado com sucesso!";
    }
});
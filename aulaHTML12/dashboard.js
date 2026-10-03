const menuInicio = document.getElementById("menu-inicio");
const menuPerfil = document.getElementById("menu-perfil");
const botaoEditar = document.getElementById("botao-editar");
const botaoCancelar = document.getElementById("botao-cancelar");
const botaoSair = document.getElementById("botao-sair");

const resumoPerfil = document.getElementById("resumo-perfil");
const formulario = document.getElementById("form-perfil");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

const nomeUsuario = document.getElementById("nome-usuario");
const emailUsuario = document.getElementById("email-usuario");
const nomeLateral = document.getElementById("nome-lateral");
const saudacao = document.getElementById("saudacao");

function abrirEdicao() {
    campoNome.value = nomeUsuario.textContent;
    campoEmail.value = emailUsuario.textContent;
    campoNome.setCustomValidity("");

    resumoPerfil.hidden = true;
    formulario.hidden = false;
    mensagem.textContent = "";

    menuInicio.classList.remove("ativo");
    menuPerfil.classList.add("ativo");

    campoNome.focus();
}

function fecharEdicao() {
    resumoPerfil.hidden = false;
    formulario.hidden = true;

    menuPerfil.classList.remove("ativo");
    menuInicio.classList.add("ativo");
}

botaoEditar.addEventListener("click", abrirEdicao);
menuPerfil.addEventListener("click", abrirEdicao);

menuInicio.addEventListener("click", function () {
    fecharEdicao();
    mensagem.textContent = "";
});

botaoCancelar.addEventListener("click", function () {
    fecharEdicao();
    botaoEditar.focus();
});

campoNome.addEventListener("input", function () {
    campoNome.setCustomValidity("");
});

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();

    if (nome.length < 2) {
        campoNome.setCustomValidity("Digite um nome com pelo menos 2 caracteres.");
        campoNome.reportValidity();
        return;
    }

    nomeUsuario.textContent = nome;
    emailUsuario.textContent = email;
    nomeLateral.textContent = nome;

    const primeiroNome = nome.split(" ")[0];
    saudacao.textContent = "Bem-vindo, " + primeiroNome + "!";

    fecharEdicao();
    mensagem.textContent = "Dados atualizados nesta página!";
    botaoEditar.focus();
});

botaoSair.addEventListener("click", function () {
    window.location.href = "login.html";
});
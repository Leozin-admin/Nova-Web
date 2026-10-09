const resumo = document.querySelector("#resumo-perfil");
const formulario = document.querySelector("#form-perfil");
const mensagem = document.querySelector("#mensagem");

function abrirEdicao() {
    document.querySelector("#nome").value = document.querySelector("#nome-usuario").textContent;
    document.querySelector("#email").value = document.querySelector("#email-usuario").textContent;
    resumo.style.display = "none";
    formulario.style.display = "block";
    mensagem.textContent = "";
}

function fecharEdicao() {
    resumo.style.display = "block";
    formulario.style.display = "none";
    mensagem.textContent = "";
}

function salvarPerfil() {
    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();

    if (nome.length < 2) {
        mensagem.textContent = "Digite um nome com pelo menos 2 caracteres.";
        return false;
    }

    document.querySelector("#nome-usuario").textContent = nome;
    document.querySelector("#email-usuario").textContent = email;
    document.querySelector("#nome-lateral").textContent = nome;
    document.querySelector("#saudacao").textContent = "Bem-vindo, " + nome + "!";
    fecharEdicao();
    mensagem.textContent = "Dados atualizados nesta página!";
    return false;
}

function sair() {
    window.location.href = "login.html";
}

function contarCaracteres() {
    const texto = document.querySelector("#sobre").value;

    document.querySelector("#contador").textContent = texto.length + " de 300 caracteres";
}
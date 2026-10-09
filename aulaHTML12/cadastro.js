const hoje = new Date();

const ano = hoje.getFullYear();
let mes = hoje.getMonth() + 1;
let dia = hoje.getDate();

if (mes < 10) {
    mes = "0" + mes;
}

if (dia < 10) {
    dia = "0" + dia;
}

document.querySelector("#nascimento").max = ano + "-" + mes + "-" + dia;

function cadastrar() {
    const mensagem = document.querySelector("#mensagem");

    mensagem.textContent = "Seus dados foram preenchidos corretamente!";

    return false;
}
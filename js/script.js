//aqui basicamente fiz uma pesquisa rapida de como eu posso colocar um script funcional no site//
const botao = document.querySelector("#botao-apresentacao");
const descricao = document.querySelector("#descricao");

if (botao && descricao) {
    botao.addEventListener("click", function () {
        descricao.textContent =
            "A NexGear é uma loja de periféricos gamer para montar seu setup.";

        descricao.classList.add("destaque");
    });
}

const botaoTema = document.querySelector("#botao-tema");

function aplicarTema(modoEscuro) {
    document.body.classList.toggle("modo-escuro", modoEscuro);
    botaoTema.textContent = modoEscuro ? "🌙" : "☀️";
    botaoTema.title = modoEscuro ? "Ativar modo claro" : "Ativar modo escuro";
    botaoTema.setAttribute("aria-pressed", modoEscuro);
}

if (botaoTema) {
    try {
        aplicarTema(localStorage.getItem("nexgear-tema") === "escuro");
    } catch {
        aplicarTema(false);
    }

    botaoTema.addEventListener("click", function () {
        const modoEscuro = !document.body.classList.contains("modo-escuro");
        aplicarTema(modoEscuro);

        try {
            localStorage.setItem("nexgear-tema", modoEscuro ? "escuro" : "claro");
        } catch {
        }
    });
}

const formContato = document.querySelector("#form-contato");
const feedbackFormulario = document.querySelector("#feedback-formulario");

if (formContato) {
    formContato.addEventListener("submit", function (evento) {
        evento.preventDefault(); //impedi o envio padrao do form

        if (!formContato.checkValidity()) {
            feedbackFormulario.textContent = "Preencha todos os campos obrigatórios.";
            feedbackFormulario.classList.add("erro");
            return;
        }

        feedbackFormulario.textContent = "Mensagem enviada! Entraremos em contato em Breve!!"
        feedbackFormulario.classList.remove("erro");
        formContato.reset();
    });
}

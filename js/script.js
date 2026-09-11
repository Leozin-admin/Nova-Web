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

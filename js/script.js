//aqui basicamente fiz uma pesquisa rapida de como eu posso colocar um script funcional no site//
const botao = document.querySelector("#botao-apresentacao");
const descricao = document.querySelector("#descricao");

botao.addEventListener("click", function () {
    descricao.textContent =
        "A NexGear é uma loja de periféricos gamer para montar seu setup.";

    descricao.classList.add("destaque");
});

// toggle adiciona a classe se ela não existir e remove se já existir.
const botaoTema = document.querySelector("#botao-tema");

botaoTema.addEventListener("click", function () {
    const modoEscuro = document.body.classList.toggle("modo-escuro");

    // O ícone mostra o tema atual: lua no escuro e sol no claro.
    botaoTema.textContent = modoEscuro ? "🌙" : "☀️";
    botaoTema.title = modoEscuro ? "Ativar modo claro" : "Ativar modo escuro";
    botaoTema.setAttribute("aria-pressed", modoEscuro);
});

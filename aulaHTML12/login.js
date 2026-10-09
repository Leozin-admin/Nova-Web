function entrar() {
    document.querySelector("#mensagem-form").textContent =
        "Redirecionando a página...";

    setTimeout(function () {
        window.location.href = "dashboard.html";
    }, 500);

    return false;
}
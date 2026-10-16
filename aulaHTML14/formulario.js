const campos = document.querySelectorAll(".campo");

campos.forEach(function (campo) {
    const input = campo.querySelector("input");
    const botao = campo.querySelector("button");

    // Clicou em "Habilitar": libera o campo e já coloca o cursor nele
    botao.addEventListener("click", function () {
        input.disabled = false;
        input.focus();
    });

    // Perdeu o foco: guarda se estava válido e desabilita de novo
    input.addEventListener("blur", function () {
        if (input.value === "") {
            input.dataset.estado = "";
        } else if (input.checkValidity()) {
            input.dataset.estado = "valido";
        } else {
            input.dataset.estado = "invalido";
        }

        input.disabled = true;
    });
});
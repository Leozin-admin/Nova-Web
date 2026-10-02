const formulario = document.getElementById("form-busca");
const campoBusca = document.getElementById("busca");
const usuarios = document.querySelectorAll(".usuario");
const quantidade = document.getElementById("quantidade");
const semResultados = document.getElementById("sem-resultados");

function buscarUsuarios() {
    const busca = campoBusca.value.trim().toLowerCase();
    let encontrados = 0;

    for (let i = 0; i < usuarios.length; i++) {
        const nome = usuarios[i].querySelector(".nome").textContent.toLowerCase();
        const email = usuarios[i].querySelector(".email").textContent.toLowerCase();

        if (nome.includes(busca) || email.includes(busca)) {
            usuarios[i].hidden = false;
            encontrados++;
        } else {
            usuarios[i].hidden = true;
        }
    }

    if (encontrados === 1) {
        quantidade.textContent = "1 usuário encontrado";
    } else {
        quantidade.textContent = encontrados + " usuários encontrados";
    }

    semResultados.hidden = encontrados !== 0;
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    buscarUsuarios();
});

campoBusca.addEventListener("input", buscarUsuarios);
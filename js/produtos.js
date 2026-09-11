const gradeProdutos = document.querySelector("#grade-produtos");
const produtos = Array.from(gradeProdutos.querySelectorAll(".produto"));
const buscaProdutos = document.querySelector("#busca-produtos");
const categorias = document.querySelectorAll('input[name="categoria"]');
const precoMaximo = document.querySelector("#preco-maximo");
const valorMaximo = document.querySelector("#valor-maximo");
const ordenacao = document.querySelector("#ordenacao");
const contadorProdutos = document.querySelector("#contador-produtos");
const catalogoVazio = document.querySelector("#catalogo-vazio");
const moeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function normalizarTexto(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function atualizarCatalogo() {
    const busca = normalizarTexto(buscaProdutos.value.trim());
    const categoria = document.querySelector('input[name="categoria"]:checked').value;
    let encontrados = 0;

    valorMaximo.textContent = moeda.format(Number(precoMaximo.value));
    precoMaximo.setAttribute("aria-valuetext", valorMaximo.textContent);

    produtos.forEach(function (produto) {
        const texto = normalizarTexto(produto.textContent + " " + produto.dataset.categoria);
        const corresponde = texto.includes(busca)
            && (categoria === "todos" || produto.dataset.categoria === categoria)
            && Number(produto.dataset.preco) <= Number(precoMaximo.value);
        produto.hidden = !corresponde;
        if (corresponde) encontrados++;
    });

    const ordenados = [...produtos];
    if (ordenacao.value === "menor-preco") {
        ordenados.sort((a, b) => Number(a.dataset.preco) - Number(b.dataset.preco));
    } else if (ordenacao.value === "maior-preco") {
        ordenados.sort((a, b) => Number(b.dataset.preco) - Number(a.dataset.preco));
    } else if (ordenacao.value === "nome") {
        ordenados.sort((a, b) => a.querySelector("h2").textContent.localeCompare(b.querySelector("h2").textContent, "pt-BR"));
    }
    ordenados.forEach(produto => gradeProdutos.appendChild(produto));

    contadorProdutos.textContent = encontrados === 1 ? "1 produto encontrado" : encontrados + " produtos encontrados";
    catalogoVazio.hidden = encontrados !== 0;
}

function limparFiltros() {
    buscaProdutos.value = "";
    document.querySelector('input[name="categoria"][value="todos"]').checked = true;
    precoMaximo.value = precoMaximo.max;
    ordenacao.value = "destaques";
    atualizarCatalogo();
    buscaProdutos.focus();
}

buscaProdutos.addEventListener("input", atualizarCatalogo);
precoMaximo.addEventListener("input", atualizarCatalogo);
ordenacao.addEventListener("change", atualizarCatalogo);
categorias.forEach(categoria => categoria.addEventListener("change", atualizarCatalogo));
document.querySelectorAll(".limpar-filtros").forEach(botao => botao.addEventListener("click", limparFiltros));
atualizarCatalogo();

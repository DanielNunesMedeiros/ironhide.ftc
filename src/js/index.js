const listaSelecaoIntegrante = document.querySelectorAll(".item");

listaSelecaoIntegrante.forEach(item => {
    item.addEventListener("click", () => {
        desativarCartaoIntegrante();

        const idIntegranteSelecionado = ativarCartaoIntegrante(item);

        desativarIntegranteNaListagem();
        ativarIntegranteNaListagem(idIntegranteSelecionado);

    })
})

function ativarIntegranteNaListagem(idIntegranteSelecionado) {
    const integranteSelecionadoNaListagem = document.getElementById(idIntegranteSelecionado);
    integranteSelecionadoNaListagem.classList.add("ativo");
}

function desativarIntegranteNaListagem() {
    const integranteAtivoNaListagem = document.querySelector(".ativo");
    integranteAtivoNaListagem.classList.remove("ativo");
}

function ativarCartaoIntegrante(item) {
    const idIntegranteSelecionado = item.attributes.id.value;
    const idDoCartaoIntegranteParaAbrir = "cartao-" + idIntegranteSelecionado;
    const cartaoIntegranteParaAbrir = document.getElementById(idDoCartaoIntegranteParaAbrir);
    cartaoIntegranteParaAbrir.classList.add("aberto");
    return idIntegranteSelecionado;
}

function desativarCartaoIntegrante() {
    const cartaoIntegranteAberto = document.querySelector(".aberto");
    cartaoIntegranteAberto.classList.remove("aberto");
}

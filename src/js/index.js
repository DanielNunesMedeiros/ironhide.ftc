const listaSelecaoIntegrante = document.querySelectorAll(".integrante");

listaSelecaoIntegrante.forEach(integrante => {
    integrante.addEventListener("click", () => {
        desativarCartaoIntegrante();

        const idIntegranteSelecionado = ativarCartaoIntegrante(integrante);

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

function ativarCartaoIntegrante(integrante) {
    const idIntegranteSelecionado = integrante.attributes.id.value;
    const idDoCartaoIntegranteParaAbrir = "cartao-" + idIntegranteSelecionado;
    const cartaoIntegranteParaAbrir = document.getElementById(idDoCartaoIntegranteParaAbrir);
    cartaoIntegranteParaAbrir.classList.add("aberto");
    return idIntegranteSelecionado;
}

function desativarCartaoIntegrante() {
    const cartaoIntegranteAberto = document.querySelector(".aberto");
    cartaoIntegranteAberto.classList.remove("aberto");
}

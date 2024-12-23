const listaSelecaoItem = document.querySelectorAll(".item");

listaSelecaoItem.forEach(item => {
    item.addEventListener("click", () => {
        desativarCartaoItem();

        const idItemSelecionado = ativarCartaoItem(item);

        desativarItemNaListagem();
        ativarItemNaListagem(idItemSelecionado);

    })
})

function ativarItemNaListagem(idItemSelecionado) {
    const itemSelecionadoNaListagem = document.getElementById(idItemSelecionado);
    itemSelecionadoNaListagem.classList.add("ativo");
}

function desativarItemNaListagem() {
    const itemAtivoNaListagem = document.querySelector(".ativo");
    itemAtivoNaListagem.classList.remove("ativo");
}

function ativarCartaoItem(item) {
    const idItemSelecionado = item.attributes.id.value;
    const idDoCartaoItemParaAbrir = "cartao-" + idItemSelecionado;
    const cartaoItemParaAbrir = document.getElementById(idDoCartaoItemParaAbrir);
    cartaoItemParaAbrir.classList.add("aberto");
    return idItemSelecionado;
}

function desativarCartaoItem() {
    const cartaoItemAberto = document.querySelector(".aberto");
    cartaoItemAberto.classList.remove("aberto");
}
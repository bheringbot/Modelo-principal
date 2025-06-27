// script.js

// Troca o nome do bot no título
document.querySelector("#titulo-bot").textContent = config.botName;

// Preenche automaticamente a mensagem padrão
document.querySelector("#mensagem").value = config.mensagemPadrao;

// Evento de envio do formulário
document.querySelector("#form-gerador").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita recarregar a página

  const numero = document.querySelector("#numero").value.trim();
  const mensagem = document.querySelector("#mensagem").value.trim();

  if (!numero) {
    alert("Por favor, digite o número.");
    return;
  }

  const link = `${config.linkWhatsBase}${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
});
const campoBusca = document.getElementById("buscar");

campoBusca.addEventListener("input", () => {
  const termo = campoBusca.value.toLowerCase();
  const filtrados = produtosGlobais.filter(prod =>
    prod.nome.toLowerCase().includes(termo)
  );
  exibirProdutos(filtrados);
});

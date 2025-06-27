let produtosGlobais = [];
const containerProdutos = document.getElementById("produtos-container");

// Carrega os produtos
fetch("data/produtos.json")
  .then(response => response.json())
  .then(produtos => {
    produtosGlobais = produtos;
    exibirProdutos(produtos);
  })
  .catch(erro => {
    console.error("Erro ao carregar os produtos:", erro);
  });

// Função para exibir produtos na tela
function exibirProdutos(lista) {
  containerProdutos.innerHTML = "";
  lista.forEach(prod => {
    const card = document.createElement("div");
    card.className = "produto-card";
    card.innerHTML = `
      <img src="${prod.imagem}" alt="${prod.nome}" class="produto-img">
      <p class="produto-nome">${prod.nome}</p>
      <p class="produto-preco">${prod.preco}</p>
      <a href="${prod.link}" target="_blank" class="produto-botao">Comprar</a>
    `;
    containerProdutos.appendChild(card);
  });
}

// Função para filtrar produtos por categoria
function filtrarPorCategoria(nomeCategoria) {
  const filtrados = produtosGlobais.filter(p => p.categoria === nomeCategoria);
  exibirProdutos(filtrados);
}
  .catch(erro => {
    console.error("Erro ao carregar os produtos:", erro);
  });

// produtos.js

// 1) Guarda TODOS os produtos carregados
let produtosGlobais = [];

// 2) Referência ao container onde os cards serão inseridos
const containerProdutos = document.getElementById("produtos-container");

// 3) Variável global para a instância do Fuse
let fuse;

// 4) Carrega o Fuse.js (garanta que <script src="libs/fuse.min.js"></script> venha ANTES deste arquivo no HTML)
function configurarBuscaFuse(listaDeProdutos) {
  const opcoesFuse = {
    keys: ['nome', 'categoria'], // campos usados na busca
    threshold: 0.4,              // 0.0 = busca exata, até 1.0 muito flexível
    distance: 100,               // sensibilidade de distância de correspondência
  };
  fuse = new Fuse(listaDeProdutos, opcoesFuse);
}

// 5) Fetch dos produtos e inicialização
fetch("data/produtos.json")
  .then(response => response.json())
  .then(produtos => {
    produtosGlobais = produtos;          // [A] armazena tudo
    configurarBuscaFuse(produtos);      // [B] inicializa o Fuse com os dados
    exibirProdutos(produtos);           // [C] mostra todos na tela
  })
  .catch(erro => {
    console.error("Erro ao carregar os produtos:", erro);
  });

// 6) Função que monta e injeta os cards no DOM
function exibirProdutos(lista) {
  containerProdutos.innerHTML = "";     // [D] limpa o container
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

// 7) Função para filtrar pelo clique em categorias
function filtrarPorCategoria(nomeCategoria) {
  const filtrados = produtosGlobais.filter(p => p.categoria === nomeCategoria);
  exibirProdutos(filtrados);
}

// 8) Busca inteligente com Fuse.js
document.addEventListener("DOMContentLoaded", () => {
  const campoBusca = document.getElementById("buscar"); // input de busca

  if (!campoBusca) return;

  campoBusca.addEventListener("input", () => {
    const termo = campoBusca.value.trim();

    if (termo === "") {
      // Se vazio, mostra tudo
      exibirProdutos(produtosGlobais);
    } else {
      // Fuse retorna um array de { item: produto, score: ... }
      const resultados = fuse.search(termo).map(res => res.item);
      exibirProdutos(resultados);
    }
  });
});

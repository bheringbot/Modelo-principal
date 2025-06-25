const container = document.getElementById("produtos-container");

fetch("produtos.json")
  .then(response => response.json())
  .then(produtos => {
    produtos.forEach(prod => {
      const card = document.createElement("div");
      card.className = "produto-card"; // Aqui aplicamos o estilo certo

      card.innerHTML = `
        <img src="${prod.imagem}" alt="${prod.nome}" class="produto-img">
        <p class="produto-nome">${prod.nome}</p>
        <p class="produto-preco">${prod.preco}</p>
        <a href="${prod.link}" target="_blank" class="produto-botao">Comprar</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(erro => {
    console.error("Erro ao carregar os produtos:", erro);
  });

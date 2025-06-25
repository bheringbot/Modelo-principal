const container = document.getElementById("produtos-container");

fetch("produtos.json")
  .then(response => response.json())
  .then(produtos => {
    produtos.forEach(prod => {
      const card = document.createElement("div");
      card.className = "produto";
      card.innerHTML = `
        <img src="${prod.imagem}" alt="${prod.nome}">
        <h3>${prod.nome}</h3>
        <p>${prod.preco}</p>
        <a href="${prod.link}" target="_blank">
          <button>Comprar</button>
        </a>
      `;
      container.appendChild(card);
    });
  })
  .catch(erro => {
    console.error("Erro ao carregar os produtos:", erro);
  });

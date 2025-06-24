
fetch('produtos.json')
  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById('produtos-container');
    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.className = 'produto-card';
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img" />
        <h3 class="produto-nome">${produto.nome}</h3>
        <p class="produto-preco">${produto.preco}</p>
        <a href="${produto.link}" target="_blank" class="produto-botao">Comprar</a>
      `;
      container.appendChild(card);
    });
  });

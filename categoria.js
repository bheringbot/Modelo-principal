const container = document.getElementById("categorias-container");

fetch("data/categoria.json")
  .then(response => response.json())
  .then(categorias => {
    categorias.forEach(cate => {
      const card = document.createElement("div");
      card.className = "card-categorias";
      card.innerHTML = `
        <img src="${cate.imagem}" alt="${cate.nome}">
        <span>${cate.nome}</span>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Erro ao carregar categorias:", error);
  });

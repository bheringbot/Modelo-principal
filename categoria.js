const containerCategorias = document.getElementById("categorias-container");

fetch("data/categoria.json")
  .then(response => response.json())
  .then(categorias => {
    categorias.forEach(cate => {
      const card = document.createElement("div");
      card.className = "card-categorias";
      card.setAttribute("data-categoria", cate.nome); // [1]
card.addEventListener("click", () => filtrarPorCategoria(cate.nome)); // [2]
      card.innerHTML = `
        <img src="${cate.imagem}" alt="${cate.nome}">
        <span>${cate.nome}</span>
      `;
      containerCategorias.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Erro ao carregar categorias:", error);
  });

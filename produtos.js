const produtos = [
  {
    nome: "Camiseta Oversized",
    preco: "R$ 79,90",
    imagem: "https://via.placeholder.com/200x200?text=Camiseta",
    link: "https://wa.me/5500000000000?text=Quero+essa+Camiseta"
  },
  {
    nome: "Moletom Street",
    preco: "R$ 149,90",
    imagem: "https://via.placeholder.com/200x200?text=Moletom",
    link: "https://wa.me/5500000000000?text=Quero+esse+Moletom"
  },
  {
    nome: "Boné Estiloso",
    preco: "R$ 49,99",
    imagem: "https://via.placeholder.com/200x200?text=Bon%C3%A9",
    link: "https://wa.me/5500000000000?text=Quero+esse+Bon%C3%A9"
  }
];

const container = document.getElementById("produtos-container");

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

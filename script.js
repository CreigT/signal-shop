function renderProducts() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  CONFIG.products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p class="price">$${p.price}</p>
      <p>${p.desc}</p>
      <a href="${p.link}" class="btn primary" target="_blank" rel="noopener">Buy now</a>
    `;
    grid.appendChild(card);
  });
}

renderProducts();

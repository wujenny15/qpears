/* Renders product cards from PRODUCTS in js/config.js */
(function renderCatalog() {
  function card(product, longCopy) {
    const blurb = longCopy ? product.shopBlurb : product.blurb;
    const status = product.status
      ? `<span>${product.status}</span>`
      : "";
    return `
      <article class="product">
        <div class="product-art ${product.art || ""}"><img src="${product.image}" alt=""></div>
        <div class="product-body">
          <h3>${product.name}</h3>
          <p>${blurb}</p>
          <div class="product-meta"><span class="price">$${product.price}</span>${status}</div>
          <button class="btn btn-primary" data-buy type="button">Add to bag</button>
        </div>
      </article>`;
  }

  document.querySelectorAll("[data-catalog]").forEach((root) => {
    const featured = root.dataset.featured === "true";
    const items = featured ? PRODUCTS.filter((item) => item.featured) : PRODUCTS;
    root.innerHTML = items.map((item) => card(item, !featured)).join("");
  });
})();

/* Shared chrome: banner, header, footer. Pages only supply <main>. */
(function renderLayout() {
  const page = document.body.dataset.page || "";
  const announce = document.body.dataset.announce || "";

  const navLinks = SITE.nav.map((item) => {
    const current = item.id === page ? ' aria-current="page"' : "";
    return `<a href="${item.href}"${current}>${item.label}</a>`;
  }).join("");

  const header = document.querySelector("[data-layout='header']");
  if (header) {
    header.outerHTML = `
      ${announce ? `<div class="announce">${announce}</div>` : ""}
      <header class="site-header">
        <div class="wrap header-inner">
          <a class="brand" href="index.html">
            <img src="${SITE.logo}" alt="">
            ${SITE.name}
          </a>
          <nav>${navLinks}</nav>
          <div class="header-actions">
            <a class="btn btn-primary btn-small" href="${page === "shop" ? SITE.squareUrl : "shop.html"}">
              ${page === "shop" ? "Checkout" : "Shop objects"}
            </a>
            <button class="nav-toggle" type="button" aria-label="Open menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>`;
  }

  const footer = document.querySelector("[data-layout='footer']");
  if (footer) {
    footer.outerHTML = `
      <footer class="site-footer">
        <div class="wrap footer-grid">
          <div>
            <h2>${SITE.name}</h2>
            <p>A boutique of small things, with Square at the till and a pear in charge of brand.</p>
          </div>
          <div>
            <h3>Shop</h3>
            <ul>
              <li><a href="shop.html">All objects</a></li>
              <li><a href="${SITE.squareUrl}">Square checkout</a></li>
            </ul>
          </div>
          <div>
            <h3>House</h3>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="README.md">Stories</a></li>
            </ul>
          </div>
          <div>
            <h3>Care</h3>
            <ul>
              <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
              <li>Keep away from actual fruit</li>
              <li>Do not eat the keychain</li>
            </ul>
          </div>
        </div>
        <div class="wrap legal">
          <span>© ${SITE.year} ${SITE.name}. All pears legally distinct from actual pears.</span>
          <a href="contact.html">Customer care, such as it is</a>
        </div>
      </footer>`;
  }

  document.querySelector(".nav-toggle")?.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  document.querySelectorAll("[data-email]").forEach((el) => {
    el.setAttribute("href", `mailto:${SITE.email}`);
    if (!el.dataset.emailKeepLabel) el.textContent = SITE.email;
  });
  document.querySelectorAll("[data-email-form]").forEach((form) => {
    form.setAttribute("action", `mailto:${SITE.email}`);
  });
})();

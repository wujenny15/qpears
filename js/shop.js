/* Checkout goes to Square. Change SITE.squareUrl in js/config.js. */
(function bindCheckout() {
  document.querySelectorAll("[data-buy]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = SITE.squareUrl || "contact.html";
    });
  });
})();

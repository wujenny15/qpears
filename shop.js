// Paste your Square Online shop URL here to make every Buy button checkout for real.
// Example: "https://qpears.square.site/s/shop"
const SQUARE_SHOP_URL = "";

function goToSquare(event) {
  if (SQUARE_SHOP_URL) {
    window.location.href = SQUARE_SHOP_URL;
    return;
  }
  event.preventDefault();
  window.location.href = "contact.html";
}

document.querySelectorAll("[data-buy]").forEach((button) => {
  button.addEventListener("click", goToSquare);
});

document.querySelector(".nav-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

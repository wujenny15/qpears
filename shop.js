const SQUARE_SHOP_URL = "https://qpears.square.site";

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

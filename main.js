const elMenuBtn = document.querySelector(".js-btn");
elMenuBtn.addEventListener("click", () => {
  elMenuBtn.closest(".site-header").classList.toggle("open");
  document.body.style.overflow = "hidden";
})
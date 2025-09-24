const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const bg = document.querySelector(".overmenu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu  a");

hamburger.addEventListener("click", () => {
  ["slideIn", "fadeIn"].forEach((cls) => mobileMenu.classList.toggle(cls));
  bg.classList.toggle("fadeIn");
});

mobileMenuLinks.forEach((element) => {
  element.addEventListener("click", () => {
    mobileMenu.classList.remove("slideIn", "fadeIn");
    bg.classList.remove("fadeIn");
  });
});

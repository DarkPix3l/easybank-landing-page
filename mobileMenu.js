const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const bg = document.querySelector(".overmenu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu  a");

hamburger.addEventListener("click", () => {
  //mobileMenu.classList.toggle('fadeIn', 'slideIn'); ERROR: classList just takes 1 class at the time.
  mobileMenu.classList.toggle("slideIn");
  mobileMenu.classList.toggle("fadeIn");
  bg.classList.toggle("fadeIn");
});

//close the menu when clicking on each link
mobileMenuLinks.forEach((element) => {
  element.addEventListener("click", () => {
    mobileMenu.classList.remove("slideIn", "fadeIn");
    bg.classList.remove("fadeIn");
  });
});

//optimized version pro tip. Not mine:

/*  hamburger.addEventListener('click', () => {
      ['slideIn', 'fadeIn'].forEach(cls => mobileMenu.classList.toggle(cls));
      bg.classList.toggle('fadeIn');
    }); */

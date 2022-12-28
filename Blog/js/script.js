const hamburger = document.querySelector(".fa-bars");
const sideMenu = document.querySelector(".side-menu");
const closeHam = document.querySelector(".fa-xmark");
const overlay = document.querySelector(".overlay");
// open menu
let openMenu = function () {
  sideMenu.classList.toggle("hidden");
};
// close menu
let closeMenu = function () {
  sideMenu.classList.add("hidden");
};
hamburger.addEventListener("click", function () {
  openMenu();
  overlay.addEventListener("click", closeMenu);
});
closeHam.addEventListener("click", closeMenu);

let firstName = "Asrar";

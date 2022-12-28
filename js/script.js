"use strict";
const btn = document.querySelector("#about-btn");
const about = document.querySelector("#about-para");
const img = document.getElementById("about-discription");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const menu = document.querySelector("#header-nav");
btn.addEventListener("click", () => {
  if (img.style.opacity != 0) {
    img.style.opacity = 0;
    about.style.opacity = 1;
  } else {
    about.style.opacity = 0;
    img.style.opacity = 1;
  }
});

// open navigation
const openNav = () => {
  menu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};
// close nav
const closeNav = () => {
  menu.classList.add("hidden");
  overlay.classList.add("hidden");
};
hamburger.addEventListener("click", () => {
  openNav();
  overlay.addEventListener("click", closeNav);
});


// 
// const navHover = document.querySelectorAll(".hover");
const fullNav = document.querySelector("#header-nav");
const navItems = fullNav.querySelectorAll("li");
navItems.forEach(nav=>nav.addEventListener("click",(e)=>{
  // fullNav.classList.add("hover");
  // e.target.classList.remove("hover");
  console.log(e.target);
  if(!e.target.classList.contains("hover")){
    fullNav.classList.add("hover");
    e.target.classList.remove("hover")
  }
  
}))
// navHover.forEach(item)

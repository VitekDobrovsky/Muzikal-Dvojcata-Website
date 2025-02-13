const hamburger = document.getElementById("hamburger");
const page = document.getElementById("page");
const nav = document.getElementById("navigation");
const navLinks = document.querySelectorAll(".page__navigation-item");

function changeHamburgerState() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  page.classList.toggle("hidden");
}

function closeHamburger() {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
  page.classList.remove("hidden");
}

function handleResize() {
  if (window.innerWidth > 750) {
    closeHamburger();
  } else if (window.innerWidth < 750) {
  }
}

window.addEventListener("resize", handleResize);

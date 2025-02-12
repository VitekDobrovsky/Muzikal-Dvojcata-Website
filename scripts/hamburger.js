const hamburger = document.getElementById("hamburger");
const page = document.getElementById("page");
const nav = document.getElementById("navigation");

function changeHamburgerState() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  page.classList.toggle("hidden");
}
function handleResize() {
  if (window.innerWidth > 750) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    page.classList.remove("hidden");
  }
}

window.addEventListener("resize", handleResize);

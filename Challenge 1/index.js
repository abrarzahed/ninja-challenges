const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("visible");
});

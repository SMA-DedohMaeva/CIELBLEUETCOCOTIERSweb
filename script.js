
const hamburger = document.getElementById("hamburger");
const menuTel = document.getElementById("menu-telephone");
const croixFermer = document.getElementById("croix-fermer");

hamburger.addEventListener("click", () => {
  menuTel.classList.add("actif");
  hamburger.style.display = "none"; // cacher hamburger
});

croixFermer.addEventListener("click", () => {
  menuTel.classList.remove("actif");
  hamburger.style.display = "flex"; // réafficher hamburger
});

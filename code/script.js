const navClick = document.querySelector(".navClick");
const gola = document.querySelector(".gola");
const gola2 = document.querySelector(".gola2");



gola.addEventListener("click", () => {
  navClick.style.top = 0;
  gola2.style.scale = 1;
});

gola2.addEventListener("click", () => {
  navClick.style.top = "-100%";
  gola2.style.scale = 0;
});

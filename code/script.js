
const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true});

const navClick = document.querySelector(".navClick");
const gola = document.querySelector(".gola");
const gola2 = document.querySelector(".gola2");

const signUp = document.querySelector(".s_up");
const signUpPage = document.querySelector(".signup");
const close = document.querySelector("#close");

gola.addEventListener("click", () => {
  navClick.style.top = 0;
  gola2.style.scale = 1;
});

gola2.addEventListener("click", () => {
  navClick.style.top = "-100%";
  gola2.style.scale = 0;
});

signUp.addEventListener("click",()=>{
  signUpPage.style.display="flex"
})
close.addEventListener("click",()=>{
  signUpPage.style.display="none"
})
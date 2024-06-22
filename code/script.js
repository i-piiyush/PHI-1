
const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true});

const navClick = document.querySelector(".navClick");
const gola = document.querySelector(".gola");
const gola2 = document.querySelector(".gola2");

const signUp = document.querySelector(".s_up");
const signUpPage = document.querySelector(".signup");
let closebtn = document.querySelector("#close");
const Lbtn = document.querySelector(".first p span ");
const loginPage = document.querySelector(".login");


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

Lbtn.addEventListener("click",()=>{
  loginPage.style.display="flex"
  signUpPage.style.display="none"
})

// closebtn.addEventListener("click",()=>{
//   signUpPage.style.display="none"
//   loginPage.style.display="none"
//   console.log("working");
// })
function closefnc(){
  signUpPage.style.display="none"
  loginPage.style.display="none"
  console.log("working");
}
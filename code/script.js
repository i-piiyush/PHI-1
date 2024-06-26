const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

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
  scroll.stop();
});

gola2.addEventListener("click", () => {
  navClick.style.top = "-100%";
  gola2.style.scale = 0;
  scroll.start();
});

signUp.addEventListener("click", () => {
  signUpPage.style.display = "flex";
});

Lbtn.addEventListener("click", () => {
  loginPage.style.display = "flex";
  signUpPage.style.display = "none";
});

// closebtn.addEventListener("click",()=>{
//   signUpPage.style.display="none"
//   loginPage.style.display="none"
//   console.log("working");
// })
function closefnc() {
  signUpPage.style.display = "none";
  loginPage.style.display = "none";
  console.log("working");
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

//hamburger menu button
menu = document.querySelector(".menu");
menu.onclick = function() {
    navBar = document.querySelector("nav");
    navBar.classList.toggle("active");
}
//nav bar scroll hide
const nav = document.querySelector("header");
const head = document.querySelector(".head");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY && window.scrollY > 100) {
        nav.classList.add("header--hidden");
        if (head) {
            head.classList.add("head--hidden");
        }
    } else {
        nav.classList.remove("header--hidden");
        if (head) {
            head.classList.remove("head--hidden");
        }    }
    lastScrollY = window.scrollY;
});
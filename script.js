const hamburger = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
const scrollUp = document.querySelector(".scroll-up");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
});

window.onscroll = () => {
    menu.classList.remove("menu-active");

    if (window.scrollY > 550) {
        scrollUp.classList.add("scroll-active");
    } else {
        scrollUp.classList.remove("scroll-active");
    }
};
const menuBtn = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu")
const body = document.querySelector("body")

const navToggle = (event) => {
    menuBtn.classList.toggle("open")
    menuMobile.classList.toggle("flex")
    menuMobile.classList.toggle("hidden")
    body.classList.toggle("no-scroll")

};

menuBtn.addEventListener("click", navToggle);

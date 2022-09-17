const container = document.querySelector(".container");
const menu = document.querySelector(".hamburger-menu")

menu.addEventListener("click", ()=> {
    container.classList.toggle("change");
});
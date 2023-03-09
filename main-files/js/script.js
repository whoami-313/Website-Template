const barMenu = document.querySelector(".logo-bar-container");
const menuBar = document.querySelector(".menu");

barMenu.addEventListener("click", function () {
    if (barMenu.firstElementChild.classList.contains("fa-bars")) {
        barMenu.firstElementChild.setAttribute("class", "fa-solid fa-times");
        menuBar.style.left = 0;
    }
    else {
        barMenu.firstElementChild.setAttribute("class", "fa-solid fa-bars");
        menuBar.style.left = "-30rem";
    }
});
const barMenu = document.querySelector(".logo-bar-container");
const menuBar = document.querySelector(".menu");

barMenu.addEventListener("click", function () {
    if (barMenu.firstElementChild.classList.contains("fa-bars")) {
        barMenu.firstElementChild.setAttribute("class", "svg-inline--fa fa-xmark");
        menuBar.style.left = 0;
    }
    else {
        barMenu.firstElementChild.setAttribute("class", "svg-inline--fa fa-bars");
        menuBar.style.left = "-30rem";
        console.log("slam")
    }
});
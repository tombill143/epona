setupBurgerNav();


function setupBurgerNav() {
    const burger = document.querySelector("header svg");
    const nav = document.querySelector("nav ul");

    burger.addEventListener("click", function () {
        burger.classList.toggle("open");
        nav.classList.toggle("open");
    });
}



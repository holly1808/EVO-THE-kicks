const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

const fadeElements =
    document.querySelectorAll(".fade");

function checkFade() {

    fadeElements.forEach(element => {

        const position =
            element.getBoundingClientRect().top;

        if (position <
            window.innerHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", checkFade);

checkFade();

window.addEventListener("load", () => {

    const target = document.getElementById("TOP");

    target.scrollIntoView({
        behavior: "smooth"
    });

});
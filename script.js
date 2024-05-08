const all = document.querySelector("#all");
const ml = document.querySelector("#ml");
const web = document.querySelector("#web-dev");

ml.addEventListener("click", function () {
    const project_card = document.querySelectorAll(".project-card");
    const ml_card = document.querySelectorAll(".ml");
    project_card.forEach(function (card) {
        card.style.display = "none";
    });

    ml_card.forEach(function (card) {
        card.style.display = "block";
    });
    ml.classList.add("active");
    all.classList.remove("active");
    web.classList.remove("active");
});

web.addEventListener("click", function () {
    const project_card = document.querySelectorAll(".project-card");
    const web_card = document.querySelectorAll(".web-dev");
    project_card.forEach(function (card) {
        card.style.display = "none";
    });
    web_card.forEach(function (card) {
        card.style.display = "block";
    });
    web.classList.add("active");
    all.classList.remove("active");
    ml.classList.remove("active");
});

all.addEventListener("click", function () {
    const project_card = document.querySelectorAll(".project-card");
    project_card.forEach(function (card) {
        card.style.display = "block";
    });
    all.classList.add("active");
    ml.classList.remove("active");
    web.classList.remove("active");
});

window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
    const mobileLinks = document.querySelectorAll(".mobile-link a");

    sections.forEach((section) => {
        const top = section.offsetTop - 50; // Adjusted for fixed navbar height
        const height = section.clientHeight;
        const id = section.getAttribute("id");

        if (window.scrollY >= top && window.scrollY < top + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active-menu");
            });

            document
                .querySelector(`nav a[href="#${id}"]`)
                .classList.add("active-menu");

            mobileLinks.forEach((link) => {
                link.classList.remove("mobile-menu");
            });

            this.document
                .querySelector(`.mobile-link a[href="#${id}"]`)
                .classList.add("mobile-menu");
        }
    });
});

// let prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.querySelector("header").classList.remove("hide");
//     } else {
//         document.querySelector("header").classList.add("hide");
//     }
//     prevScrollpos = currentScrollPos;
// };

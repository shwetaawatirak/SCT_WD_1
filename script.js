
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formStatus.textContent =
            "Thank you! Your form has been validated.";

        contactForm.reset();
    });
}


const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {
    let currentSection = "home";

    sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= 180) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(function (link) {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + currentSection
        );
    });

}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);
updateActiveLink();

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navLinks");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("show");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}
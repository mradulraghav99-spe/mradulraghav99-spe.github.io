
const year = new Date().getFullYear();

document.querySelector("footer p").textContent =
    `© ${year} Mradul Raghav. All Rights Reserved.`;



const menuButton = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");

menuButton.onclick = function () {

    navLinks.classList.toggle("active");

};

"use-strict";

document.querySelector(".barsicon").addEventListener("click", function() {
    const navBox = document.querySelector(".navbox");
    const icon = document.querySelector(".fa-bars");
    navBox.classList.toggle("show");
    icon.classList.toggle("fa-xmark");
});
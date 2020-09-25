let navButton = document.querySelector(".nav-button i");
let mobileMenu = document.querySelector(".mobile-menu");
navButton.addEventListener("click", function () {
  if (navButton.classList.contains("fa-bars")) {
    navButton.classList.replace("fa-bars", "fa-times");
    mobileMenu.style.transform = "translateY(0)";
    mobileMenu.style.transition = "0.4s";
  } else {
    navButton.classList.replace("fa-times", "fa-bars");
    mobileMenu.style.transform = "translateY(-100%)";
    mobileMenu.style.transition = "0.4s";
  }
});
let dropButton = document.querySelectorAll(".dropbtn");

dropButton.forEach((e) => {
  e.addEventListener("click", function () {
    e.nextElementSibling.classList.toggle("show");
  });
});

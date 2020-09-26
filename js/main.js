// NAV-SCROLL-FIXED-START
let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    nav.classList.add("fixed")
    
  }
  else {
    nav.classList.remove("fixed")
  }
})
// NAV-SCROLL-FIXED-END
// NAV-MOBILE-MENU-TOGGLE-START
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
// MOBILE-MENU-DROPDOWN
let dropButton = document.querySelectorAll(".dropbtn");
dropButton.forEach((e) => {
  e.addEventListener("click", function () {
    e.nextElementSibling.classList.toggle("show");
  });
});
// NAV-MOBILE-MENU-TOGGLE-END

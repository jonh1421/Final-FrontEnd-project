// NAV-SCROLL-FIXED-START
let nav = document.querySelector("nav");
let linkHover = document.querySelector(".link-hover");
let link = document.querySelector(".link");
 let mobileMenu = document.querySelector(".mobile-menu");
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    nav.classList.add("fixed");
    mobileMenu.classList.add("mob-fixed")
  } else {
    nav.classList.remove("fixed");
    mobileMenu.classList.remove("mob-fixed");
  }
});

$(document).ready(function () {
  $(".nav-button i").click(function () {
    $(".mobile-menu").slideToggle(400);
  });
});
// MOBILE-MENU-DROPDOWN
let dropButton = document.querySelectorAll(".dropbtn");
dropButton.forEach((e) => {
  e.addEventListener("click", function () {
    e.nextElementSibling.classList.toggle("show");
  });
});
// NAV-MOBILE-MENU-TOGGLE-END
$(".owl-carousel.myowl").owlCarousel({
  loop: true,
  margin: 0,
  dotsEach: 2,

  responsiveClass: true,

  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },

    1000: {
      items: 2.6,
      nav: false,
      dots: true,
      loop: true,
    },
  },
});

$(document).ready(function () {
  $(".owl-carousel.owl-theme").owlCarousel();
});
$(".owl-carousel.owl-theme").owlCarousel({
  margin: 27,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

AOS.init();

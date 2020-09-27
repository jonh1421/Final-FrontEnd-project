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
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  dots: true,
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
      items: 2.5,
      nav: false,
      loop: true,
    },
   
  },
});
// $('.testimonials-carousel').owlCarousel({
//   loop: true,
//   nav: false,
//   margin: 30,
//   dots: true,
//   autoplay: false,
//   items: 1,
//   navText: [
//     "<i class='fa fa-angle-left'></i>",
//     "<i class='fa fa-angle-right'></i>"
//   ],
//   responsive: {
//     1000: {
//       stagePadding: 100,
//       items: 2,
//     }
//   }
// });

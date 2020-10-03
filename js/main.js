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
// toogle menu

$(document).ready(function () {


  $(".nav-button ").click(function () {
   $(".mobile-menu").slideToggle(400);
    if ($(".nav-button i").hasClass("fa-bars")) {
      $(".nav-button i").removeClass("fa-bars");
      $(".nav-button i").addClass("fa-times");

    }
    else {
      $(".nav-button i").removeClass("fa-times");
      $(".nav-button i").addClass("fa-bars");
      
    }
  });
});
// toggle-menu
// MOBILE-MENU-DROPDOWN
let dropButton = document.querySelectorAll(".dropbtn");
dropButton.forEach((e) => {
  e.addEventListener("click", function () {
    e.nextElementSibling.classList.toggle("show");
  });
});
// NAV-MOBILE-MENU-TOGGLE-END
// my owl
$(".owl-carousel.myowl").owlCarousel({
  loop: true,
  margin: 0,
  dotsEach: 2,

  responsiveClass: true,

  responsive: {
    0: {
      items: 1,
      
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
// owl-theme
$(document).ready(function () {
  $(".owl-carousel.owl-theme").owlCarousel();
});
$(".owl-carousel.owl-theme").owlCarousel({
  margin: 20,

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
// Appointment dropdown
function appointDrDown() {
  $(".items1").click(function () {
    $(".items1").removeClass("selected-option");
    $(this).addClass("selected-option");
    $(this).parent().prev().text($(this).text());
  });
  $(".items2").click(function () {
    $(".items2").removeClass("selected-option");
    $(this).addClass("selected-option");
    $(this).parent().prev().text($(this).text());
  });
}
appointDrDown();


// Count up START
$(".timer").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 6000,
      easing: "linear",
      step: function () {
        $this.html((Math.floor(this.countNum) + '<i class="fas fa-plus"></i>'));
      },
      complete: function () {
        $this.html(this.countNum + '<i class="fas fa-plus"></i>');
        //alert('finished');
      },
    }
  );
});
// Count up end

setTimeout(() => {
  $(".preloader").removeClass("active");
}, 1500);
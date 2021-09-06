$(document).ready(function () {
  let body = document.querySelector("body");
  let header = document.querySelector("header");
  let coverMain = document.querySelector(".cover-main");
  let sticky = header.cloneNode(true);
  sticky.classList.add("sticky");
  coverMain.insertBefore(sticky, header);

  document.addEventListener("scroll", function () {
    body.classList.toggle("scroll", scrollY > 350);
  });

  // MASONRY

  $(".grid").masonry({
    //options
    itemSelector: ".grid-item",
    columnWidth: ".grid-item",
    fitWidth: true,
    gutter: 0,
  });

  // SMOOTH SCROOL
  $(".menu li a[href^='#']").on("click", function (e) {
    e.preventDefault();

    let target = $(this.hash);

    if (target.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 60,
          },
          1000
        );
    }
  });

  // SLICK SLIDER

  $(".slider").slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    fade: false,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //RESPONSIVE MENU START

  let menuTrigger = $(".js-menu-trigger");
  let mainOverlay = $(".js-main-overlay");

  menuTrigger.on("click", function () {
    body.classList.add("menu-is-active");
  });

  mainOverlay.on("click", function () {
    body.classList.remove("menu-is-active");
  });

  $(".menu li a").on("click", function () {
    body.classList.remove("menu-is-active");
  });
});

$(window).load(function () {
  // makes sure the whole site is loaded
  $(".page-preloader spinner").fadeOut(); // will first fade out the loading animation
  $(".page-preloader").delay(350).fadeOut("slow");
  // will fade out the white DIV that covers the website.
  $("body").delay(350).css({
    overflow: "visible",
  });
});

// Owl carousel
$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    nav: true,
  });
});

// hide #back-top first
$("#back-top").hide();

// fade in #back-top

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#back-top").fadeIn();
  } else {
    $("#back-top").fadeOut();
  }
});

$(document).ready(function() {
  $(".nav-btn").on("click", function() {
    $(".nav__btn-icon, .header__nav, .header__nav-link").toggleClass("active");
  });

  const navBtn = $(".nav-btn");
  const navHed = $(".header__nav");
  const link = $(".header__nav-link");
  const btn = $(".nav__btn-icon");

  link.on("click", function() {
    navHed.removeClass("active");
    btn.removeClass("active");
  });

  $(".owl-carousel").owlCarousel({
    items: 1
  });

  const scrollBtn = $(".scroll-btn");

  scrollBtn.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      scrollBtn.fadeIn();
      navHed.removeClass("active");
      btn.removeClass("active");
    } else {
      scrollBtn.fadeOut();
    }
  });

  scrollBtn.on("click", function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      500
    );
  });

  var mixer = mixitup(".products__row");
});

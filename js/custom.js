$(window).load(function() {
  "use strict";
  $("#status").fadeOut();
  $("#preloader")
    .delay(350)
    .fadeOut("slow");
  $("body")
    .delay(350)
    .css({
      overflow: "visible"
    });
});

$(document).ready(function() {
  "use strict";

  // scroll menu
  const sections = $(".section"),
    nav = $(".navbar-fixed-top,footer"),
    nav_height = nav.outerHeight();

  $(window).on("scroll", function() {
    const cur_pos = $(this).scrollTop();

    sections.each(function() {
      const top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
        sections.removeClass("active");

        $(this).addClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });

  nav.find("a").on("click", function() {
    const $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - nav_height + 2
      },
      600
    );

    return false;
  });

  // Menu opacity
  if ($(window).scrollTop() > 80) {
    $(".navbar-fixed-top").addClass("bg-nav");
  } else {
    $(".navbar-fixed-top").removeClass("bg-nav");
  }
  $(window).scroll(function() {
    if ($(window).scrollTop() > 80) {
      $(".navbar-fixed-top").addClass("bg-nav");
    } else {
      $(".navbar-fixed-top").removeClass("bg-nav");
    }
  });

  // Parallax
  const parallax = function() {
    $(window).stellar();
  };

  $(function() {
    parallax();
  });

  // AOS
  AOS.init({
    duration: 1200,
    once: true,
    disable: "mobile"
  });
});

$(document).on("turbolinks:load", function() {
  // Nav class changes
  $('.sessions.new nav').removeClass('nav-ghost-pop').addClass('nav-ghost-light');
  // Scroll Animations - ScrollTo
  $("#learn-more-button-home").click(function() {
    $('#signup-form').show();
    $('#home-slideshow').show();
    $('html, body').animate({
        scrollTop: $("#home-slideshow").offset().top
    }, 1000);
  });
  $("#get-started-button-home").click(function() {
    $('#home-slideshow').show();
    $('#signup-form').show();
    $('html, body').animate({
        scrollTop: $("#signup-form").offset().top
    }, 1000);
  });
  $(".back-to-top").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
  });
  $(".slideshow-signup").click(function() {
    $('html, body').animate({
        scrollTop: $("#signup-form").offset().top
    }, 1000);
  });

  // Scroll Animations - Fade Buttons In/Out
  var nav = $('.my-nav');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 300 && !nav.hasClass('nav-light')) {
			nav.slideUp(1, function() {
        nav.removeClass('nav-ghost-pop').addClass('nav-light').fadeIn(500);
        $('.back-to-top').fadeIn(500);
      });
		} else if (scroll <= 100 && !nav.hasClass('nav-ghost-pop')) {
      nav.slideUp(1, function() {
        nav.removeClass('nav-light').addClass('nav-ghost-pop').fadeIn(500);
        $('.back-to-top').fadeOut(500);
      });
		} else if (scroll >= 300 && scroll <= $("#signup-form").offset().top && $(".slideshow-signup").css('display') === 'none') {
      $('.slideshow-signup').fadeIn(500);
    } else if (scroll <= 100  || scroll >= $("#signup-form").offset().top && $(".slideshow-signup").css('display') !== 'none') {
      $(".slideshow-signup").fadeOut(500);
    }
  });
});

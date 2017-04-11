$(document).on("turbolinks:load", function() {
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


  var nav = $('.my-nav');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 300 && !nav.hasClass('nav-light')) {
			nav.slideUp(1, function() {
        nav.removeClass('nav-pop').addClass('nav-light').fadeIn(500);
        $('.back-to-top').fadeIn(500);
      });
		} else if (scroll <= 100 && !nav.hasClass('nav-pop')) {
      nav.slideUp(1, function() {
        nav.removeClass('nav-light').addClass('nav-pop').fadeIn(500);
        $('.back-to-top').fadeOut(500);
      });
		}
  });
});

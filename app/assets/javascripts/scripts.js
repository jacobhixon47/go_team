$(document).on("turbolinks:load", function() {
  $("#get-started-button-home").click(function() {
    $('html, body').animate({
        scrollTop: $("#home-slideshow").offset().top
    }, 1000);
  });

  var nav = $('.my-nav');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 300 && !nav.hasClass('nav-light')) {
			nav.slideUp(1, function() {
        nav.removeClass('nav-pop').addClass('nav-light').fadeIn(500);
      });
		} else if (scroll <= 100 && !nav.hasClass('nav-pop')) {
      nav.slideUp(1, function() {
        nav.removeClass('nav-light').addClass('nav-pop').fadeIn(500);
      });
		}
  });
});

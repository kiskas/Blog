$(function () {
    // Slideshow 1
    $("#slides1").responsiveSlides({
        pagination: true,
        nav: true,
        fade: 500
    });
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.up').fadeIn();
            $('.col-md-3.default').addClass('fixed');
		}else {
			$('.up').fadeOut();
            $('.col-md-3.default').removeClass('fixed');
		}
	});
	
	$('.up').click(function () {
		$('body,html').animate({scrollTop: 0}, 400); 
		return false;
	});

});
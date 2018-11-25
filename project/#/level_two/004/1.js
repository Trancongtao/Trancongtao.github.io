$(document).ready(function() {
	
	$('.content_part').slideUp();
	$('.part h3').click(function(event) {
		$(this).toggleClass('changebackground');
		$(this).next().slideToggle(500);

		$('html,body').animate({scrollTop: $(this).offset().top}, 500);
	});

});
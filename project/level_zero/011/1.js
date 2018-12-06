$(document).ready(function() {
	$('.part .nd').slideUp();
	$('.part h3').click(function(event) {
		$(this).toggleClass('doimau');
		$(this).next().slideToggle();
		$('html,body').animate({scrollTop: $(this).offset().top}, 800);
	});
	
});
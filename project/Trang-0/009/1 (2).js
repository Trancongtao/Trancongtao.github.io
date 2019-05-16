$(document).ready(function() {
	$('.part p').slideUp();
	$('.part h3').click(function(event) {
		$(this).next().slideToggle();
		$(this).toggleClass('doimau');
	});
});
$(document).ready(function() {
	
	$('.content').slideUp();

	$('.part h3').click(function(event) {
		$(this).next().slideToggle();
		$(this).toggleClass('changebackground');
	});

});
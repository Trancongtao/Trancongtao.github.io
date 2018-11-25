$(document).ready(function() {

	$('.register').animate({opacity: 0,marginTop: -1000},500);
	$('.btn-primary').click(function(event) {
		event.preventDefault();
		$('.login').animate({opacity: 0,marginTop: -1000}, 700);
		$('.register').animate({opacity: 1,marginTop: 0}, 700);
	});
	$('.btn-success').click(function(event) {
		event.preventDefault();
		$('.register').animate({opacity: 0,marginTop: -1000}, 700);
		$('.login').animate({opacity: 1,marginTop: 0}, 700);
	});;

});
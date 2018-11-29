$(document).ready(function() {
	$('ul.navbar-nav li:nth-child(1) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$('#about').offset().top}, 1000);
		
	});
	$('ul.navbar-nav li:nth-child(2) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$('#services').offset().top}, 1000);
	});
	$('ul.navbar-nav li:nth-child(3) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$('#contact').offset().top}, 1000);
	});
});		
$(document).ready(function() {
	$('ul.navbar-nav li:nth-child(2) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:900}, 1000);
	});
});		
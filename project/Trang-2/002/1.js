$(document).ready(function() {
	$(window).scroll(function(event) {
		vitribody = $('html,body').scrollTop();
		console.log(vitribody);

		if(vitribody >= 65){
			$('nav.navbar.navbar-default').addClass('bg_white');
		}
		else {
			$('nav.navbar.navbar-default').removeClass('bg_white');
		}
	});
});
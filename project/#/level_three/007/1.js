$(document).ready(function() {
	$(window).scroll(function(event) {
		var vitribody = $('html,body').scrollTop();

		console.log(vitribody);
		if(vitribody >= 48){
			$('nav.navbar.navbar-default').addClass('add_padding');
		}
		else{
			$('nav.navbar.navbar-default').removeClass('add_padding');
		}
	});;
});
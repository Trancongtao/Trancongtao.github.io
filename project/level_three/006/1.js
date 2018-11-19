$(document).ready(function() {
	$(window).scroll(function(event) {
		var vitribody = $('html,body').scrollTop();
		console.log(vitribody);

		if(vitribody >= 130){
			$('nav.navbar.navbar-default').addClass('bg_black');
		}
		else{
			$('nav.navbar.navbar-default').removeClass('bg_black');
		}
	});;
});
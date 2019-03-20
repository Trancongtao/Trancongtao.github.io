$(document).ready(function() {
	
	var docao = $(window).height();
	$('.header').css({
		'height': docao
	});

	$(window).resize(function(event) {
		var docao = $(window).height();
		$('.header').css({
			'height': docao
		});
	});

	
	$(window).scroll(function(event) {
		var vitri = $('html,body').scrollTop();
		
		if(vitri >= 150){
			$('nav.navbar.navbar-default').addClass('bg_black');
		}
		else {
			$('nav.navbar.navbar-default').removeClass('bg_black');
		}
	});
});
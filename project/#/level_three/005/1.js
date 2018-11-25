$(document).ready(function() {
	$('html,body').scrollspy({target:'.navbar-default'});

	$('.navbar-default .navbar-nav>li>a').click(function(event) {
		event.preventDefault();
		var vitri = $(this).attr('href');
		var toado = $(vitri).offset().top;
		$('html,body').animate({scrollTop:toado},1000,"easeOutBounce");
	});

	$(window).scroll(function(event) {
		var vitribody = $('html,body').scrollTop();
		console.log(vitribody);

		if(vitribody >= 120){
			$('nav.navbar.navbar-default').addClass('bg_black');
		}
		else{
			$('nav.navbar.navbar-default').removeClass('bg_black');
		}
	});
});
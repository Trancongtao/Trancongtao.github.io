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

	$('.navbar-default ul li:nth-child(1) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.chapter1').offset().top}, 1400,"easeOutExpo");
	});

	$('.navbar-default ul li:nth-child(2) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.chapter2').offset().top}, 1400,"easeOutElastic");
	});

	$('.navbar-default ul li:nth-child(3) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.chapter3').offset().top}, 1400,"easeInOutBack");
	});

	$('.navbar-default ul li:nth-child(4) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.chapter4').offset().top}, 1400,"easeOutBounce");
	});


	$(window).scroll(function(event) {
		var vitri = $('html,body').scrollTop();
		if(vitri >= 588){
			$('.navbar-default').addClass('nenden');
		}
		else {
			$('.navbar-default').removeClass('nenden');
		}
	});;
});				
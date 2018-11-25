$(document).ready(function() {

	var chapter1 = $('.chapter1').offset().top;
	chapter1 = chapter1 - 60;
	$('ul.navbar-nav li:nth-child(1) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: chapter1 }, 1000,"easeOutBounce");
	});

	var chapter2 = $('.chapter2').offset().top;
	chapter2 = chapter2 - 50;
	$('ul.navbar-nav li:nth-child(2) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: chapter2 }, 1000,"easeOutBounce");
	});

	var chapter3 = $('.chapter3').offset().top;
	chapter3 = chapter3 - 50;
	$('ul.navbar-nav li:nth-child(3) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: chapter3 }, 1000,"easeOutBounce");
	});

	var chapter4 = $('.chapter4').offset().top;
	chapter4 = chapter4 - 50;
	$('ul.navbar-nav li:nth-child(4) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: chapter4 }, 1000,"easeOutBounce");
	});

	$('.buttontop').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: 0 }, 500);
	});

});			
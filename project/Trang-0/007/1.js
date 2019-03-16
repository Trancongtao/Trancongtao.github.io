$(document).ready(function() {

	console.log($(window).height());
	var docao = $(window).height();
	$('.header').css({'height': docao});

	$(window).resize(function(event) {
		var docao = $(window).height();
		$('.header').css({'height': docao});
	});

	$('.nutmenu').click(function(event) {
		$('.menu').addClass('hienra');
		$(this).addClass('bienmat');
	});

	$('.menu i').click(function(event) {
		$('.menu').removeClass('hienra');
		$('.nutmenu').removeClass('bienmat');
	});

	$('.header a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$('.intro').offset().top},1000);
	});

	$('.menu ul .item1').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: 0}, 1000);
		$('.menu').removeClass('hienra');
		$('.nutmenu').removeClass('bienmat');
	});

	$('.menu ul .item2').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.category').offset().top}, 1000);
		$('.menu').removeClass('hienra');
		$('.nutmenu').removeClass('bienmat');
	});

	$('.menu ul .item3').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.anhnen').offset().top}, 1000);
		$('.menu').removeClass('hienra');
		$('.nutmenu').removeClass('bienmat');
	});

	$('.menu ul .item4').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.work').offset().top}, 1000);
		$('.menu').removeClass('hienra');
		$('.nutmenu').removeClass('bienmat');
	});

	$('.menu ul .item5').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $('.select').offset().top}, 1000);
		$('.menu').removeClass('hienra');
		$('.nutmenu').removeClass('bienmat');
	});
});
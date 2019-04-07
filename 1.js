$(document).ready(function() {

	var docao = $(window).height();
	$('.banner').css({
		'height': docao
	});
	$(window).resize(function(event) {
		var docao = $(window).height();
		$('.banner').css({
			'height': docao
		});
	});

	// $('.navbar-default li:first-child a').click(function(event) {
	// 	event.preventDefault();
	// 	$('html,body').animate({scrollTop: $('#gioithieu').offset().top}, 1000,"easeInExpo");
	// });

	// new WOW().init();


	var vt_infopersonal=$('.info_personal').offset().top;
	vt_infopersonal=vt_infopersonal-100;
	
	$('.icon i').click(function(event) {
		$('html,body').animate({scrollTop:vt_infopersonal}, 900);
	});
	
	$(window).scroll(function(event){
		var vitribody=$('html,body').scrollTop();
		if(vitribody>=587){
			$('.navbar-default').addClass('thunho');
		}
		else{
			$('.navbar-default').removeClass('thunho');
		}
		if(vitribody>=305){
			$('.button_top').addClass('hienra');
		}
		else{
			$('.button_top').removeClass('hienra');
		}
	});

	$('.button_top').click(function(event) {
		$('html,body').animate({scrollTop:0}, 2000,"easeOutQuad");
	});
});
$(document).ready(function() {
	///////////////////////
	// tinh vi tri khoi3 //
	///////////////////////
	var vitrikhoi3_a=$('.khoi3').offset().top;
	///////////////////////
	// su kien cho menu4 //
	///////////////////////
	$('.navbar-nav li:nth-child(4) a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: vitrikhoi3_a}, 2000,"easeOutExpo");
	});
	///////////////////////////////////
	// su kien xay ra khi cuon trang //
	///////////////////////////////////
	$(window).scroll(function(event) {
		var vitribody=$('html,body').scrollTop();
		if(vitribody>=115){
			$('.navbar-default').addClass('chuyenmau');
		}
		else{
			$('.navbar-default').removeClass('chuyenmau');
		}

		if(vitribody>=220){
			$('.nutlentren').addClass('hien');
		}
		else{
			$('.nutlentren').removeClass('hien');
		}

		var vitrikhoi2=$('.khoi2').offset().top;
		vitrikhoi2=vitrikhoi2-400;

		if(vitribody>=vitrikhoi2){
			$('.khoi2').addClass('hien');
		}
		else{
			$('.khoi2').removeClass('hien');
		}

		var vitrikhoi3=$('.khoi3').offset().top;
		vitrikhoi3=vitrikhoi3-300;

		if(vitribody>=vitrikhoi3){
			$('.khoi3').addClass('hien');
			// TweenMax.staggerFromTo($('.col-sm-4'),0.1,{opacity:0,top:1000},{opacity:1,top:0},0.4);
		}
		else{
			$('.khoi3').removeClass('hien');
			// TweenMax.staggerFromTo($('.col-sm-4'),0.1,{opacity:1,top:0},{opacity:0,top:1000},0.4);
		}
	});
	//////////////////////////////
	// su kien cho nut len tren //
	//////////////////////////////
	$('.nutlentren').click(function(event) {
		$('html,body').animate({scrollTop:0}, 1500,"easeOutExpo");
	});;
});
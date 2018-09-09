$(document).ready(function() {	
	/////////////////
	// tinh vi tri //
	/////////////////
	var vitrithumnail=$('.col-xs-6').offset().top;
	vitrithumnail=vitrithumnail-250;

	///////////////////////////////////
	// su kien xay ra khi cuon chuot //
	///////////////////////////////////
	$(window).scroll(function(event) {	
		var vitribody=$('html,body').scrollTop();
		
		if(vitribody>=363){
			$('.navbar-inverse').addClass('an');
		}
		else{
			$('.navbar-inverse').removeClass('an');
		}

		if(vitribody>=140){
			$('.nutlentren').addClass('hienra');
		}
		else{
			$('.nutlentren').removeClass('hienra');
		}

		if(vitribody>=vitrithumnail){
			TweenMax.staggerTo($('.col-xs-6'),1,{opacity: 1,y:0},0.2);
		}
		else{
			TweenMax.staggerTo($('.col-xs-6'),1,{opacity: 0,y:700},0.2);	
		}
	});

	///////////////////////////////
	// su kien cho nut scrollTop //
	///////////////////////////////
	$('.nutlentren').click(function(event) {
		$('html,body').animate({scrollTop:0}, 1000);
	});
});
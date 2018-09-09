$(document).ready(function() {

	//////////////////////////
	// su kien load ban dau //
	//////////////////////////
	TweenMax.staggerFrom($('.col-xs-6.col-sm-4.col-md-4.col-lg-4'),1,{opacity:0,top:500},0.4);
	////////////////////////
	// su kien cuon chuot //
	////////////////////////
	$(window).scroll(function(event) {
		var vitribody=$('html,body').scrollTop();
		// console.log(vitribody);
		if(vitribody>=36){
			$('.navbar-inverse').addClass('an');
		}
		else{
			$('.navbar-inverse').removeClass('an')
		}

		if(vitribody>=330){
			$('.nutlentren').addClass('hienra');
		}
		else{
			$('.nutlentren').removeClass('hienra');
		}
	});

	$('.nutlentren').click(function(event) {
		$('.navbar-default').addClass('doimau');
	});

	//////////////////////////////
	// su kien cho nut scollTop //
	//////////////////////////////
	$('.nutlentren').click(function(event) {
		$('html,body').animate({scrollTop:0}, 1000);
	});
});
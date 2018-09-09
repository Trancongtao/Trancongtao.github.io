$(document).ready(function() {
	///////////////////////////////////
	// su kien xay ra khi cuon chuot //
	///////////////////////////////////
	$(window).scroll(function(event) {
		var vitribody=$('html,body').scrollTop();
		if(vitribody>=668){
			$('.navbar-default').addClass('thunho');
		}
		else{
			$('.navbar-default').removeClass('thunho');
		}

		if(vitribody>=425){
			$('.nutlentren').addClass('hienra');
		}
		else{
			$('.nutlentren').removeClass('hienra');
		}
	});
	///////////////////////////////
	// su kien cho nut scrollTop //
	///////////////////////////////
	$('.nutlentren').click(function(event) {
		$('html,body').animate({scrollTop:0}, 1000);
	});;

});	
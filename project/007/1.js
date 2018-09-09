$(document).ready(function() {
	//////////////////////////////////////
	// thiet lap hinh nen full man hinh //
	//////////////////////////////////////
	var docao=$(window).height();
	$('.khoi1').css({'height':docao});
	$(window).resize(function(event) {
		var docao=$(window).height();
		$('.khoi1').css({'height':docao});
	});
	//////////////////////////////////////////////
	// su kien xay ra khi nguoi dung cuon chuot //
	//////////////////////////////////////////////
	$(window).scroll(function(event) {
		var vitribody=$('html,body').scrollTop();
		if(vitribody>=90){
			$('.navbar-default').addClass('hiennen');
		}
		else{
			$('.navbar-default').removeClass('hiennen');
		}

		if(vitribody>=383){
			$('.nutlentren').addClass('hienra');
		}
		else{
			$('.nutlentren').removeClass('hienra');
		}
	});
	////////////////////////////////////////////////
	// su kien khi nguoi dung click nut scrollTop //
	////////////////////////////////////////////////
	$('.nutlentren').click(function(event) {
		$('html,body').animate({scrollTop:0}, 1000);
	});
});
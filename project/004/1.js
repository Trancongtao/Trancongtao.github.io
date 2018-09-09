$(document).ready(function() {
	//////////////////////////////////////////////
	// su kien xay ra khi nguoi dung cuon chuot //
	//////////////////////////////////////////////
	$(window).scroll(function(event) {
		var vitribody=$('html,body').scrollTop();
		
		if(vitribody>=500){
			$('.nutlentren').addClass('hienra');
		}
		else{
			$('.nutlentren').removeClass('hienra');
		}
	});
	///////////////////////////////////////////////
	// su kien khi nguoi dung nhan nut scrollTop //
	///////////////////////////////////////////////
	$('.nutlentren').click(function(event) {
		$('html,body').animate({scrollTop:0}, 1000);
	});
});
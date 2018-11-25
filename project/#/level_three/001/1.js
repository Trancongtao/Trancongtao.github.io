$(document).ready(function() {
	$(window).scroll(function(event) {
		var vitri = $('html,body').scrollTop();
		if(vitri >=620){
			$('.navbar-default').addClass('bg_black');
		}
		else{
			$('.navbar-default').removeClass('bg_black');
		}
	});
});
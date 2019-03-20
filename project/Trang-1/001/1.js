$(document).ready(function() {
	$(window).scroll(function(event) {
		vitribody = $('html,body').scrollTop();
		console.log(vitribody);

if(vitribody >= 640){
			$('.navbar.navbar-default').addClass('padd');
		}
		else{
			$('.navbar.navbar-default').removeClass('padd');
		}
	});
});
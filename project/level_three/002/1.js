$(document).ready(function() {
	
	$(window).scroll(function(event) {
		var vitribody = $('html,body').scrollTop();
		console.log(vitribody);
		var vitripics = $('.pics').offset().top;
		vitripics = vitripics - 500;
		if(vitribody >=600){
			$('.navbar-default').addClass('bg-black');
		}
		else{
			$('.navbar-default').removeClass('bg-black');
		}

		if(vitribody >= vitripics){
			$('.content_two').addClass('bounceInRight animated');
		}
	});
});						
$(document).ready(function() {
	$('.nutone a.aleft').click(function(event) {
		$('.menu_left').toggleClass('leftgo');
		$('.menu_right').removeClass('rightgo');
		$('.menu_top').removeClass('topgo');
		$('.menu_bottom').removeClass('bottomgo');
		$('.nutone').toggleClass('go goleft');
		$('.nutone').removeClass('go goright');
		$('.nutone').removeClass('go gotop');
		$('.nutone').removeClass('go gobottom');
	});
	$('.nutone a.aright').click(function(event) {
		$('.menu_right').toggleClass('rightgo');
		$('.menu_left').removeClass('leftgo');
		$('.menu_top').removeClass('topgo');
		$('.menu_bottom').removeClass('bottomgo');
		$('.nutone').toggleClass('go goright');
		$('.nutone').removeClass('go goleft');
		$('.nutone').removeClass('go gotop');
		$('.nutone').removeClass('go gobottom');
	});
	$('.nutone a.atop').click(function(event) {
		$('.menu_top').toggleClass('topgo');
		$('.menu_right').removeClass('rightgo');
		$('.menu_left').removeClass('leftgo');
		$('.menu_bottom').removeClass('bottomgo');
		$('.nutone').toggleClass('go gotop');
		$('.nutone').removeClass('go goright');
		$('.nutone').removeClass('go goleft');
		$('.nutone').removeClass('go gobottom');
	});
	$('.nutone a.abottom').click(function(event) {
		$('.menu_bottom').toggleClass('bottomgo');
		$('.menu_top').removeClass('topgo');
		$('.menu_right').removeClass('rightgo');
		$('.menu_left').removeClass('leftgo');
		$('.nutone').toggleClass('go gobottom');
		$('.nutone').removeClass('go gotop');
		$('.nutone').removeClass('go goright');
		$('.nutone').removeClass('go goleft');
	});
});
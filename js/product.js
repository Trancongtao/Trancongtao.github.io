$(document).ready(function() {
	
	$('.button_menu').click(function(event) {
		$(this).toggleClass('go_buttonmenu_right');
		$('.menu_left').toggleClass('open_menu');
		$('.over').toggleClass('go_right');
		$('.nenden').toggleClass('hienra');
	});

	$('.nenden').click(function(event) {
		$('.button_menu').removeClass('go_buttonmenu_right');
		$('.menu_left').removeClass('open_menu');
		$('.over').removeClass('go_right');
		$(this).removeClass('hienra');
	});

	// $('.menu_left .yellow').click(function(event) {
	// 	$('.title').addClass('yellow');
	// });

	// $('.menu_left .brown').click(function(event) {
	// 	$('.title').addClass('brown');
	// });

});
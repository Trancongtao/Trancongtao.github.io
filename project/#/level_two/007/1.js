$(document).ready(function() {
	
	$('.button_one').click(function(event) {
		$('.content_one').addClass('show_one');
		$('.fuzzy').addClass('show_right');
	});

	$('.button_two').click(function(event) {
		$('.content_two').addClass('show_two');
		$('.fuzzy').addClass('show_right');
	});

	$('.button_three').click(function(event) {
		$('.content_three').addClass('show_three');
		$('.fuzzy').addClass('show_right');
	});

	$('.button_four').click(function(event) {
		$('.content_four').addClass('show_four');
		$('.fuzzy').addClass('show_right');
	});

	$('.button_five').click(function(event) {
		$('.content_five').addClass('show_five');
		$('.fuzzy').addClass('show_right');
	});

	$('.button_six').click(function(event) {
		$('.content_six').addClass('show_six');
		$('.fuzzy').addClass('show_right');
	});

	$('.button_seven').click(function(event) {
		$('.content_seven').addClass('show_seven');
		$('.fuzzy').addClass('show_right');
	});

	$('.button_eight').click(function(event) {
		$('.content_eight').addClass('show_eight');
		$('.fuzzy').addClass('show_right');
	});

	$('.button_nine').click(function(event) {
		$('.content_nine').addClass('show_nine');
		$('.fuzzy').addClass('show_right');
	});

	$('.button_ten').click(function(event) {
		$('.content_ten').addClass('show_ten');
		$('.fuzzy').addClass('show_right');
	});

	$('.button_close').click(function(event) {
		$('.content_one').removeClass('show_one');
		$('.content_two').removeClass('show_two');
		$('.content_three').removeClass('show_three');
		$('.content_four').removeClass('show_four');
		$('.content_five').removeClass('show_five');
		$('.content_six').removeClass('show_six');
		$('.content_seven').removeClass('show_seven');
		$('.content_eight').removeClass('show_eight');
		$('.content_nine').removeClass('show_nine');
		$('.content_ten').removeClass('show_ten');
		$('.fuzzy').removeClass('show_right');
	});

	$('.fuzzy').click(function(event) {
		$('.content_one').removeClass('show_one');
		$('.content_two').removeClass('show_two');
		$('.content_three').removeClass('show_three');
		$('.content_four').removeClass('show_four');
		$('.content_five').removeClass('show_five');
		$('.content_six').removeClass('show_six');
		$('.content_seven').removeClass('show_seven');
		$('.content_eight').removeClass('show_eight');
		$('.content_nine').removeClass('show_nine');
		$('.content_ten').removeClass('show_ten');
		$('.fuzzy').removeClass('show_right');
	});

});
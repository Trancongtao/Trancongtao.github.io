$(document).ready(function() {
	$('.anh').isotope({
		itemSelector: 'img'
	});

	// $('.list ul li a').click(function(event) {
	// 	event.preventDefault();
	// 	var danhmuc = $(this).data('class');
	// 	console.log(danhmuc);

	// 	$('.anh img').each(function(index, el) {
	// 		if($(this).hasClass(danhmuc)){
	// 			$(this).fadeIn();
	// 		}
	// 		else {
	// 			$(this).fadeOut();
	// 		}
	// 	});
	// });

	$('.list ul li a').click(function(event) {
		event.preventDefault();
		var danhmuc = $(this).data('class');

		if(danhmuc == 'all'){
			$('.anh').isotope({
				filter:'*'
			});
		}
		else {
			$('.anh').isotope({
				filter: danhmuc
			});
		}
	});
});
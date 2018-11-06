$(document).ready(function() {
	$('.select_right a').click(function(event) {
		event.preventDefault();

		var danhmuc = $(this).data('class');
		
		var ten = $(this).text();
		$('.pics h1').text(ten);

		$('.pics ul li').each(function(index, el) {
			if($(this).hasClass(danhmuc)){
				$(this).show(400);
			}
			else{
				$(this).hide(400);
			}
		});
	});
});
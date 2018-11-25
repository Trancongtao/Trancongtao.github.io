$(document).ready(function() {
	$('.pics ul').isotope({
		itemSelector:'li'
	});

	$('.select_right a').click(function(event) {
		event.preventDefault();
		var danhmuc = $(this).data('class');

		var ten = $(this).text();
		$('.pics h1').text(ten);

		$('.pics ul').isotope({
			filter: danhmuc
		});

		if(danhmuc == 'all'){
			$('.pics h1').text('All Images');
			$('.pics ul').isotope({
				filter:'*'
			});
		}
		else{
			$('.pics ul').isotope({
				filter: danhmuc
			});
		}
	});

	// $('.keys').keypress(function(event) {
	// 	if(event.keyCode == "13"){
	// 		key1=$('.keys').val();
	// 		key1="."+key1; 
	// 		$('.pics ul').isotope({
	// 			filter: key1
	// 		});
	// 		console.log(key1);
	// 	}
	// });

	// thoigian = setInterval(function(){
	// 	key1=$('.keys').val();
	// 		key1="."+key1; 
	// 		$('.pics ul').isotope({
	// 			filter: key1
	// 		});
	// },200);
});
$(document).ready(function() {
	
	TweenMax.staggerFrom($('.part'),1,{opacity: 0,left: 500},0.3);

	TweenMax.from($('.loadmore'),5,{opacity: 0});

	$('.contentmore .part').slideUp();
	$('.loadmore a').click(function(event) {
		$('.contentmore .part').slideDown();
		TweenMax.staggerFrom($('.contentmore .part'),1,{opacity: 0,y: 500},0.3);
	});

});
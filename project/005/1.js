$(document).ready(function() {
	///////////////////////////////////
	// thiet lap full hinh nen khoi1 //
	///////////////////////////////////
	var docao=$(window).height();
	$('.khoi1').css({'height':docao});
	$(window).resize(function(event) {
		var docao=$(window).height();
		$('.khoi1').css({'height':docao});
	});
	/////////////////////////////////////////
	// khi click vao icon thi menu hien ra //
	/////////////////////////////////////////
	$('.iconmenu').click(function(event) {
		$('.menubenphai').toggleClass('vaotubenphai');
		$(this).toggleClass('dichuyentheomenu');
	});
	////////////////////////////////////////////////////////////////////////
	// khi click vao tung danh muc thi se cuon trang toi noi dung phu hop //
	////////////////////////////////////////////////////////////////////////
	var vitribody=$('html,body').scrollTop();
	var vitrikhoi1=$('.khoi1').offset().top;
	$('.menubenphai .n1').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:vitrikhoi1}, 1000);
	});

	var vitrikhoi2=$('.khoi2').offset().top;
	$('.khoi1bentrong a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:vitrikhoi2}, 1000);
	});

	var vitrikhoi3=$('.khoi3').offset().top;
	$('.menubenphai .n2').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:vitrikhoi3}, 1000);
	});

	var vitrikhoi5=$('.khoi5').offset().top;
	vitrikhoi5=vitrikhoi5+50;
	$('.menubenphai .n3').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:vitrikhoi5}, 1000);
	});

	var vitrikhoi7=$('.khoi7').offset().top;
	$('.menubenphai .n4').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:vitrikhoi7}, 1000);
	});
	
	//////////////////////////////////////////
	// su kien cuon chuot cho nut scrollTop //
	//////////////////////////////////////////
	$(window).scroll(function(event) {
		var vitribody=$('html,body').scrollTop();
		if(vitribody>=620){
			$('.nutlentren').addClass('hienra');
		}
		else{
			$('.nutlentren').removeClass('hienra');
		}
	});

	$('.nutlentren').click(function(event) {
		$('html,body').animate({scrollTop:0}, 1000);
	});
});
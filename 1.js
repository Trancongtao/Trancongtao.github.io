$(document).ready(function() {

	hieuungload=new TimelineMax();
	hieuungload.from($('.loading'),0.5,{opacity:1})
	.from($('.khoiload'),1,{scale:1.5,opacity:0,ease:Elastic.easeOut})
	.to($('.khoiload'),1,{scale:0.5,opacity:1,background:"red"})
	.to($('.khoiload'),1,{scale:1,opacity:1,background:"yellow",ease:Elastic.easeOut})
	.to($('.khoiload'),1,{scale:0.5,opacity:1,background:"blue"})
	.to($('.khoiload'),1,{scale:1,opacity:1,background:"#09F809",ease:Elastic.easeOut})
	.to($('.khoiload'),1,{scale:0.5,opacity:1,background:"pink"})
	.to($('.khoiload'),1,{scale:1,opacity:1,background:"orange",ease:Elastic.easeOut})
	.to($('.khoiload'),0.6,{scale:2,opacity:0,background:"brown"})
	.to($('.loading'),1,{y:-2000})

	var vt_infopersonal=$('.info_personal').offset().top;
	vt_infopersonal=vt_infopersonal-100;
	
	$('.icon i').click(function(event) {
		$('html,body').animate({scrollTop:vt_infopersonal}, 900);
	});
	
	$(window).scroll(function(event){
		var vitribody=$('html,body').scrollTop();
		if(vitribody>=587){
			$('.navbar-default').addClass('thunho');
		}
		else{
			$('.navbar-default').removeClass('thunho');
		}
		if(vitribody>=305){
			$('.button_top').addClass('hienra');
		}
		else{
			$('.button_top').removeClass('hienra');
		}
	});

	$('.button_top i').click(function(event) {
		$('html,body').animate({scrollTop:0}, 600);
	});
});
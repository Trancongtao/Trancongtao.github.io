document.addEventListener("DOMContentLoaded",function(){
	
	var nut = document.querySelector('.nut');
	console.log(nut);
	var menuLeft = document.querySelector('.menu_left');
	console.log(menuLeft);
	var den = document.querySelector('.backgroud_black');
	console.log(den);
	var over = document.querySelector('.over');
	var menu = document.querySelector('.menu');

	nut.onclick=function(){
		den.classList.add('hienlen');
		over.classList.add('dichphai');
		menuLeft.classList.add('dichsangphai');
		menu.classList.add('quay');
	}

	den.onclick=function(){
		den.classList.remove('hienlen');
		over.classList.remove('dichphai');
		menu.classList.remove('quay');
		menuLeft.classList.remove('dichsangphai');
	}
},false);
document.addEventListener("DOMContentLoaded",function(){

	var menu = document.querySelector('.navbar-default');
	menu1 = menu.offsetTop;
	console.log(menu1);

	var hinh = document.querySelector('.ads2');
	hinh2 = hinh.offsetTop +200;

	gioihan_h2 = hinh2 + 500;
	console.log(hinh2);

	window.addEventListener("scroll",function(){
		var x = window.pageYOffset;
		if(x >= menu1){
			menu.classList.add('dinh');
		}
		else{
			menu.classList.remove('dinh');
		}

		if((x >= hinh2) && (x <= gioihan_h2)){
			hinh.classList.add('dinh1');
		}
		else {
			hinh.classList.remove('dinh1');
		}

	});
},false);
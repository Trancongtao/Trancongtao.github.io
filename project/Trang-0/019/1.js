document.addEventListener("DOMContentLoaded",function(){

	var menu = document.querySelector(".navbar-default");

	window.addEventListener("scroll",function(){
		if(window.pageYOffset > 300){
			menu.classList.add('thunho');
		}
		else{
			menu.classList.remove('thunho');
		}
	})
},false);
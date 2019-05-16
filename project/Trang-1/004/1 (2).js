document.addEventListener("DOMContentLoaded",function(){
	var nut = document.querySelectorAll('.nutslide ul li');
	// console.log(nut);
	var slides = document.querySelectorAll('.cacslide ul li');
	// console.log(slides);
	var thoigian = setInterval(function(){
		var vitrislide = 0;
		var slideHienTai =document.querySelector('.cacslide ul li.active');

		for (vitrislide = 0; slideHienTai = slideHienTai.previousElementSibling; vitrislide++) {}

			if(vitrislide < (slides.length -1)){
				for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove('active');
					nut[i].classList.remove('active');
				}
				slides[vitrislide].nextElementSibling.classList.add('active');
				nut[vitrislide].nextElementSibling.classList.add('active');
			}
			else {
				for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove('active');
					nut[i].classList.remove('active');
				}
				slides[0].classList.add('active');
				nut[0].classList.add('active');
			}


		},5000);

	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){

			clearInterval(thoigian);

			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('active')
			}
			this.classList.add('active');

			var nutkichhoat=this;
			var vtnut=0;
			for (vtnut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vtnut++) {}
				console.log('vi tri nut kich hoat = '+vtnut);

			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				slides[vtnut].classList.add('active');
			}
		});
	}
},false);
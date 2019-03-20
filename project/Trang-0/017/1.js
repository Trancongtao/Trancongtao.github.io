// var x1 = document.getElementsByTagName('h1');
// console.log(x1);

// var x2 = document.getElementById('title');
// console.log(x2);

// var x3 = document.querySelector('h1');
// console.log(x3);

document.addEventListener("DOMContentLoaded",function(){
	var tamgiac = document.getElementsByClassName('tamgiac');
	var tg = tamgiac[0];
	var danhsach = document.getElementsByClassName('danhsach');
	var ds = danhsach[0];

	for (var i = 0; i < tamgiac.length; i++) {
		tamgiac[i].onclick=function(){
			
			
			if(this.classList[1]=='tamgiactrang'){
				this.classList.remove('tamgiactrang');

				var hienra = this.getAttribute('data-hienlen');
				var phantu = document.getElementById(hienra);

				phantu.classList.remove('hienra');
			}
			else {
				for (var j = 0; j < tamgiac.length; j++) {
					tamgiac[j].classList.remove('tamgiactrang');
				}

				this.classList.toggle('tamgiactrang');

				var hienra = this.getAttribute('data-hienlen');
				var phantu = document.getElementById(hienra);

				for (var j = 0; j < danhsach.length; j++) {
					danhsach[j].classList.remove('hienra');
				}
				phantu.classList.toggle('hienra');
			}
		}
	}
},false)
var burgerBtn = document.querySelector('.burger__menu');
burgerBtn.onclick = function menuToggle(){
	document.querySelector('.header-nav').classList.toggle('toggle-nav');
};
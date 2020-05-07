document.body.children[1].style.marginTop = document.querySelector('.nav').offsetHeight + 40 + 'px';

function toggleMenu() {
	document.querySelector('.nav-main').classList.toggle('show-mobile');
}
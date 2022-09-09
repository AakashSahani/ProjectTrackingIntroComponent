const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-item');

hamburger.addEventListener('click', () => {
	menudisplay();
});

function menudisplay() {
	if (navmenu.style.visibility === 'visible') {
		navmenu.style.visibility = 'hidden';
		hamburger.src = './images/icon-hamburger.svg';
	} else {
		navmenu.style.visibility = 'visible';
		hamburger.src = './images/icon-close.svg';
	}
}

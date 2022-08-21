const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-item');

hamburger.addEventListener('click', () => {
	hamburger.classList.add('active');
	navmenu.classList.add('active');
});

const themeBtns = [
	document.querySelector('.theme-toggle__dark'),
	document.querySelector('.theme-toggle__light'),
];
const toggleTheme = (e) => {
	if (!themeBtns.includes(e.target)) return;

	const active = document.querySelector('.active');
	active.classList.remove('active');
	e.target.classList.add('active');
	if (e.target.classList.contains('theme-toggle__dark')) {
		document.firstElementChild.setAttribute('data-theme', 'dark');
	} else if (e.target.classList.contains('theme-toggle__light')) {
		document.firstElementChild.setAttribute('data-theme', 'light');
	}
};

document.addEventListener('click', toggleTheme);

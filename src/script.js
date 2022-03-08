const themeBtns = [
	document.querySelector('.theme-toggle__dark'),
	document.querySelector('.theme-toggle__light'),
];
const output = document.querySelector('output');

const onClick = (e) => {
	const toggleTheme = () => {
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
	toggleTheme();

	const onBtnClick = () => {
		if (themeBtns.includes(e.target)) return;
		if (e.target === document.body) return;
		if (e.target.classList.contains('output')) return;

		if (e.target.textContent === 'C') {
			output.textContent = '';
		} else if (e.target.textContent === '=') {
			output.textContent = new Function('return ' + output.textContent)();
		} else if (e.target.textContent === '←') {
			output.textContent = output.textContent.slice(0, -1);
		} else {
			output.textContent += e.target.textContent;
		}
	};
	onBtnClick();
};

document.addEventListener('click', onClick);

document.addEventListener('keyup', (e) => {
	const pattern = /[0-9]|\.|\+|\-|\*|\/|\(|\)/g;
	if (e.key.match(pattern)) {
		if (e.shiftKey && e.key === '=') e.preventDefault();
		output.textContent += e.key;
	}
	if (e.key.toLowerCase() === 'c') {
		output.textContent = '';
	}
	if (e.key === 'Backspace') {
		output.textContent = output.textContent.slice(0, -1);
	}
	if (e.key === 'Enter') {
		output.textContent = new Function('return ' + output.textContent)();
	}
});

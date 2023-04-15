// @ts-ignore
export function scrollToAnchor(event) {
	event.preventDefault();
	const href = event.target.getAttribute('href');
	const offsetTop = document.querySelector(href).offsetTop - 60;
	window.scrollTo({
		top: offsetTop,
		behavior: 'smooth'
	});
}
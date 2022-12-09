export default function useCallbackOnEnter(func) {

	const eventListener = event =>
		event.key === 'Enter' && func();

	return [
		() => window.addEventListener('keypress', eventListener),
		() => window.removeEventListener('keypress', eventListener)
	];
}

export default function useCallbackOnEnter(callback) {

	const eventListener = event => event.key === 'Enter' && callback();

	return [
		() => window.addEventListener('keypress', eventListener),
		() => window.removeEventListener('keypress', eventListener)
	];
}

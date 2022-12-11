export default function newMessage(text, author) {
	return {
		type: "message",
		text,
		author,
		date: new Date().toLocaleTimeString(),
		id: Math.random(),
	};
}

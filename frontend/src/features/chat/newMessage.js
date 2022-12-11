export default function newMessage(text, author) {
	const date = new Date()
	return {
		type: "message",
		text,
		author,
		date: date.toLocaleTimeString(),
		id: Math.random() + date.getTime()
	};
}

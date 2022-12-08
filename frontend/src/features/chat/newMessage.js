
export default function newMessage(user, text) {

    const date = new Date()

	return {
		type: "message",
		user,
		text,
		date: date.toLocaleTimeString(),
		id: Math.random(),
	};
}

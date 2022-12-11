
export default function newMessage(user, text, avatar) {

    const date = new Date()

	return {
		type: "message",
		user,
		text,
		avatar,
		date: date.toLocaleTimeString(),
		id: Math.random(),
	};
}

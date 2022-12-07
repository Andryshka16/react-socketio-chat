
export default function newMessage(user, text) {

    const date = new Date()

    return {
		user,
		text,
		date: date.toLocaleTimeString(),
		id: Math.random(),
	};
}

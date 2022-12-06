
export default function createMessage(user, text) {

    const date = new Date()

    return {
		user,
		text,
		date: date.toLocaleTimeString(),
		id: date.getTime(),
	};
}

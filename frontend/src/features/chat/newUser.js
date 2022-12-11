export default function newUser(name) { 
    const date = new Date()
    return {
        type: "user",
        name,
        date: date.toLocaleTimeString(),
        id: Math.random() + date.getTime()
    }
}
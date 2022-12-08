export default function newUser(name) { 
    return {
        type: "user",
        name,
        date: new Date().toLocaleTimeString()
    }
}
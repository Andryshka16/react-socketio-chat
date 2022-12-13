import express from "express"
import cors from "cors"

import { createServer} from "http"
import { Server } from "socket.io"

const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use("/", (_, res) => res.send(`Server is running on port ${PORT}`))
app.all('*', (_, res) => res.redirect(`/`))

const server = createServer(app)

const io = new Server(server, {
	cors: {
		origin: 'https://lapchat.onrender.com',
		methods: ['GET', 'POST'],
	},
});

let connected = 0

io.on("connection", socket => { 

	connected += 1
	
	socket.on("disconnect", () => {
		connected -= 1
	})

	socket.emit("userConnected", connected)
	socket.broadcast.emit("userConnected", connected)

    socket.on("sendMessage", message => { 
        socket.broadcast.emit("getMessage", message)
    })
})

server.listen(PORT, (error) => {
	if (error) {
		return console.log(error);
	}
	console.log("Server started!")
})

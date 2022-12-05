import express from "express"
import cors from "cors"

import { createServer} from "http"
import { Server } from "socket.io"

const app = express()
app.use(cors())

const server = createServer(app)

const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
});


io.on("connection", socket => { 
    
    socket.on("handleMessage", (message) => { 
        socket.broadcast.emit("getMessage", message);
        socket.emit("getMessage", message);
    })
})


server.listen(3001, () => console.log("Server started!"))

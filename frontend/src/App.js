import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Chat, Join, Navigation, Footer, Alert } from "./components"
import { createNotification } from './features/chat/chatSlice'
import { useDispatch } from "react-redux"

import io from "socket.io-client"
import "./index.css"

export const socket = io.connect("https://lapchat-server.onrender.com/")


export default function App() {

	const dispatch = useDispatch()

	useEffect(() => {
		socket.on("getMessage", msg =>
			dispatch(createNotification(msg))
	)}, [socket])

	return (
		<BrowserRouter>
			<Navigation />
			<Alert/>
			<Routes>
				<Route path='/' element={<Join />} />
				<Route path='/chat' element={<Chat />} />
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}

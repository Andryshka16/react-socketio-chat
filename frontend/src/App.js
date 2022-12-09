import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Chat, Join, Navigation } from "./components"
import io from "socket.io-client"
import "./index.css"

export const socket = io.connect("http://localhost:3001")

export default function App() {

  return (
		<BrowserRouter>
		<Navigation/>
			<Routes>
				<Route path='/' element={<Join />} />
				<Route path='/chat' element={<Chat />} />
			</Routes>
		</BrowserRouter>
  );
}

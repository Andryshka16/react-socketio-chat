import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Chat, Join } from "./components"
import "./index.css"

import io from "socket.io-client"
export const socket = io.connect("http://localhost:3001")


export default function App() {

  return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Join />} />
				<Route path='/chat' element={<Chat />} />
			</Routes>
		</BrowserRouter>
  );
}

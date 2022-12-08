import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChatPage, JoinPage } from "./components"
import "./index.css"

import io from "socket.io-client"
export const socket = io.connect("http://localhost:3001")


export default function App() {

  return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<JoinPage />} />
				<Route path='/chat' element={<ChatPage />} />
			</Routes>
		</BrowserRouter>
  );
}

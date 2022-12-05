import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Chat, Join } from "./components"
import "./index.css"

import io from "socket.io-client"
const socket = io.connect("http://localhost:3001")


export default function App() {

  const [user, setUser] = useState("")
  console.log(user)

  return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Join user={user} setUser={setUser} />}
				/>
        <Route
          path='/chat'
          element={<Chat user={user} />}
        />
			</Routes>
		</BrowserRouter>
  );
}

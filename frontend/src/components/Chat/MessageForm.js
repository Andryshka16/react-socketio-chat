import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {createMessage} from "../../features/chat/chatSlice"
import { socket } from '../../App'
import newMessage from '../../features/chat/newMessage'


export default function Input() {

	const dispatch = useDispatch();
	const { name } = useSelector((store) => store.user)
	const [value, setValue] = useState('')

	const sendMessage = () => {
		
		if (!value.trim()) {
			setValue("")
			return
		}
		
		const message = newMessage(name, value)
		dispatch(createMessage(message))
		socket.emit('sendMessage', message)

		setValue("")
	
	}

	useEffect(() => {

		const eventListener = (event) => {
			event.key === 'Enter' && sendMessage()
		};

		window.addEventListener('keypress', eventListener)
		return () => window.removeEventListener("keypress", eventListener)

	}, [value]);
	
	return (
		<div className='message-form'>

			<input
				type='text' value={value}
				onChange={(event) => {
					setValue(event.target.value);
				}}
				className='message-input'
				placeholder='Your text here'
			/>

			<button className='send-message' onClick={sendMessage}>
				Send
			</button>

		</div>
	);
}

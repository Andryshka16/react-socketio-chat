import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {createMessage} from "../../features/messages/messagesSlice"



export default function Input() {

	const dispatch = useDispatch();
	const { name } = useSelector((store) => store.user);
	const [value, setValue] = useState('');

	const sendMessage = () => {
		dispatch(createMessage({name, value}))
		setValue("")
	}

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

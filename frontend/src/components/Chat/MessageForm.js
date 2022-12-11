import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserText } from "../../features/user/userSlice"

import useSendMessage  from '../../hooks/useSendMessage'
import useCallbackOnEnter from '../../hooks/useCallbackOnEnter';


export default function MessageForm() {

	const dispatch = useDispatch()
	const sendMessage = useSendMessage()
	const [bindEnter, unBindEnter] = useCallbackOnEnter(sendMessage)
	const { name, text } = useSelector(store => store.user)

	useEffect(() => {
		bindEnter()
		return unBindEnter
	}, [text]);

	if (!name) return (
		<h1 className='login-alert'>Need to login to send messages</h1>
	)
	
	return (
		<div className='message-form'>

			<input
				type='text' value={text}
				onChange={event => dispatch(updateUserText(event.target.value))}
				className='message-input'
				placeholder='Your text here'/>

			<button className='send-message' onClick={sendMessage}> Send </button>

		</div>
	);
}

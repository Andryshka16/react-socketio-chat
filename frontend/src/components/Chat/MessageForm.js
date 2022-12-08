import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSendMessage } from '../hooks/useSendMessage'
import { updateUserText } from "../../features/user/userSlice"
import useCallbackOnEnter from '../hooks/useCallbackOnEnter';


export default function Input() {

	const dispatch = useDispatch()
	const sendMessage = useSendMessage()

	const { text } = useSelector(store => store.user)

	const [bindEnter, unBindEnter] = useCallbackOnEnter(sendMessage)

	useEffect(() => {
		bindEnter()
		return unBindEnter
	}, [text]);
	
	return (
		<div className='message-form'>

			<input
				type='text' value={text}
				onChange={event => 
					dispatch(updateUserText(event.target.value))
				}
				className='message-input'
				placeholder='Your text here'
			/>

			<button className='send-message' onClick={sendMessage}>
				Send
			</button>

		</div>
	);
}

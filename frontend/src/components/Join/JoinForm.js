import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import useJoinChat from './useJoinChat';

export default function JoinForm() {

	const { name } = useSelector(store => store.user)
	const dispatch = useDispatch()
	const joinChat = useJoinChat()

	const handleInputChange = (event) => {
		dispatch(updateUser(event.target.value));
	};

	useEffect(() => {
		const eventListener = event =>
			event.key === "Enter" && joinChat()
		
		window.addEventListener("keypress", eventListener)
		return () => window.removeEventListener("keypress", eventListener)
	}, [])

	return <div className='user-form'>
		<input
			type='text'
			value={name}
			onChange={handleInputChange}
			placeholder='Enter your name'
		/>
		<button
			className='enter-btn'
			onClick={joinChat}>
			Enter
		</button>
	</div>
	
}

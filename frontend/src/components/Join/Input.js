import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import useJoinChat from './useJoinChat';

export function Input() {

	const { name } = useSelector(store => store.user)
	const dispatch = useDispatch()

	const handleInputChange = (event) => {
		dispatch(updateUser(event.target.value));
	};

	const goToChat = useJoinChat()

	useEffect(() => {
		const eventListener = event =>
			event.key === "Enter" && goToChat()
		
		window.addEventListener("keypress", eventListener)
		return () => window.removeEventListener("keypress", eventListener)
	}, []
	)

	return (
		<input
			type='text'
			value={name}
			onChange={handleInputChange}
			placeholder='Enter your name'
		/>
	);
}

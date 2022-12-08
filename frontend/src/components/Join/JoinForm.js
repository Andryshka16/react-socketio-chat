import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import useCallbackOnEnter from '../hooks/useCallbackOnEnter';
import useJoinChat from '../../hooks/useJoinChat'

export default function JoinForm() {

	const { name } = useSelector(store => store.user)
	const dispatch = useDispatch()
	const joinChat = useJoinChat()
	
	const [bindEnter, unBindEnter] = useCallbackOnEnter(joinChat)

	const handleInputChange = (event) => {
		dispatch(updateUser(event.target.value));
	};

	useEffect(() => {
		bindEnter()
		return unBindEnter
	}, [name])

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

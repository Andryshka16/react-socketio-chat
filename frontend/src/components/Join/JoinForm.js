import React, { useEffect, useState } from 'react';

import useCallbackOnEnter from '../../hooks/useCallbackOnEnter';
import useJoinChat from '../../hooks/useJoinChat'

export default function JoinForm() {

	const [value, setValue] = useState("")
	const joinChat = useJoinChat(value)
	const [bindEnter, unBindEnter] = useCallbackOnEnter(joinChat)

	useEffect(() => {
		bindEnter()
		return unBindEnter
	}, [value])

	return <div className='user-form'>
		<input
			type='text'
			value={value}
			onChange={event=>setValue(event.target.value)}
			placeholder='Enter your name'
		/>
		<button
			className='enter-btn'
			onClick={joinChat}>
			Enter
		</button>
	</div>
	
}

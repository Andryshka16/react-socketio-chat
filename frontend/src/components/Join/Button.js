import React from 'react';
import { NavLink } from 'react-router-dom';
import useJoinChat from './useJoinChat';

export function Button() {

	const joinChat = useJoinChat()

	return (
		<button
			className='enter-btn'
			onClick={joinChat}>
			Enter
		</button>
	);
}

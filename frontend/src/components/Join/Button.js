import React from 'react';
import { NavLink } from 'react-router-dom';

export function Button() {
	return (
		<NavLink to='/chat'>
			<button className='enter-btn'>Enter</button>
		</NavLink>
	);
}

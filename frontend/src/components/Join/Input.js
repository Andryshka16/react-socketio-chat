import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';

export function Input() {

	const { name } = useSelector(store => store.user)
	const dispatch = useDispatch()

	const handleInputChange = (event) => {
		dispatch(updateUser(event.target.value));
	};

	return (
		<input
			type='text'
			value={name}
			onChange={handleInputChange}
			placeholder='Enter your name'
		/>
	);
}

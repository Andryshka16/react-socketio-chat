import React from 'react';

export function Input({ user, setUser }) {
	const handleInputChange = (event) => {
		setUser(event.target.value);
	};

	return (
		<input
			type='text'
			value={user}
			onChange={handleInputChange}
			placeholder='Enter your name'
		/>
	);
}

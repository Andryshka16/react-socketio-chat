import React from 'react';
import { Button } from './Button';
import { Input } from './Input';

export default function Join({ user, setUser }) {
	return (
		<div className='join'>
			<h1>Hey, join chat right now!</h1>
			<div className='join-form'>
				<Input user={user} setUser={setUser} />
				<Button />
			</div>
			<h1>Happy chatting!</h1>
		</div>
	)
}

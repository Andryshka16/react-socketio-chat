import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from './Button';
import { Input } from './Input';


export default function Join() {

	return (
		<div className='join'>
			<h1>Hey, join chat right now!</h1>
			<div className='join-form'>
				<Input/>
				<Button />
			</div>
			<h1>Happy chatting!</h1>
		</div>
	)
}

import React, {useEffect} from 'react';
import JoinForm from './JoinForm';
import { useDispatch } from 'react-redux'
import { updateUserName } from '../../features/user/userSlice';

export default function JoinPage() {

	const dispatch = useDispatch()
	useEffect(() => { 
		dispatch(updateUserName(""))
	}, [])

	return (
		<div className='join'>
			<h1>Hey, join chat right now!</h1>
			<JoinForm />
			<h1>Happy chatting!</h1>
		</div>
	);
}

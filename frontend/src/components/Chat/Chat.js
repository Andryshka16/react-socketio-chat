import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ChatContent from './ChatContent'
import MessageForm from './MessageForm'


export default function Chat() {
 
	const navigate = useNavigate()
	const { name } = useSelector(store => store.user)
	if (!name.trim()) navigate("/")

  return (
		<div className='chat'>
			<MessageForm />
			<ChatContent />
		</div>
  );
}

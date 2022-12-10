import React  from 'react'
import { useSelector } from 'react-redux';
import ChatContent from './ChatContent'
import MessageForm from './MessageForm'


export default function Chat() {

	const { name } = useSelector(store => store.user)
	

  return (
	<div className='chat'>
		<MessageForm />
		<ChatContent />
	</div>
  );
}

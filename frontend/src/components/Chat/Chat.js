import React, { useEffect } from 'react'
import ChatContent from './ChatContent'
import MessageForm from './MessageForm'


export default function Chat() {

  return (
		<div className='chat'>
			<MessageForm />
			<ChatContent />
		</div>
  );
}

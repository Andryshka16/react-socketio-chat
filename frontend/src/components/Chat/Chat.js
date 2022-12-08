import React from 'react'
import Messages from './Messages'
import MessageForm from './MessageForm'


export default function Chat() {
 
  return (
		<div className='chat'>
			<MessageForm />
			<Messages />
		</div>
  );
}

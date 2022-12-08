import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from './Message';
import { socket } from '../../App';
import { createMessage } from '../../features/messages/messagesSlice';


export default function Messages() {

    const dispatch = useDispatch()

    const messages = useSelector((store) => store.messages);

    useEffect(() => {
        socket.on("getMessage", (message) => { 
            dispatch(createMessage(message))
    })
     }, [socket])


	return (
		<div className='chat-box'>
			{messages.map((message) => (
				<Message key={message.id} {...message} />
			))}
		</div>
	);
}

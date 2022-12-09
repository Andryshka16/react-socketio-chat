import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from './Message';
import { socket } from '../../App';
import { createNotification } from '../../features/chat/chatSlice';
import JoinAlert from './JoinAlert';

export default function ChatContent() {

    const dispatch = useDispatch()

    const messages = useSelector((store) => store.messages);

    useEffect(() => {
        socket.on("getMessage", (message) => { 
            dispatch(createNotification(message))

    })
     }, [socket])


	return (
		<div className='chat-box'>
            {messages.map((element) => (
                element.type === "message" ?
                    <Message
                        key={element.id}
                        {...element} /> :
                    <JoinAlert
                        key={element.id}
                        {...element} />
			))}
		</div>
	);
}

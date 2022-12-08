import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from './Message';
import { socket } from '../../App';
import { createMessage } from '../../features/chat/chatSlice';
import { UserJoined } from './UserJoined';


export default function ChatContent() {

    const dispatch = useDispatch()

    const messages = useSelector((store) => store.messages);

    useEffect(() => {
        socket.on("getMessage", (message) => { 
            dispatch(createMessage(message))
    })
     }, [socket])


	return (
		<div className='chat-box'>
            {messages.map((element) => (
                element.type === "message" ?
                    <Message
                        key={element.id}
                        {...element} /> :
                    <UserJoined
                        key={element.id}
                        {...element} />
			))}
		</div>
	);
}

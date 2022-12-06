import React from 'react'
import { useSelector } from 'react-redux';

export default function Messages() {
	
    const messages = useSelector(store => store.messages)

    return (
        <div className='chat-box'>
            {
                messages.map(({ user, text }) =>
                    <div className='message'>
                        <h3>{ text } </h3>
                        <p>{ user } </p>
                    </div>
                )
            }
        </div>
    );
}

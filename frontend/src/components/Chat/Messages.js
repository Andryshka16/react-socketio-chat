import React from 'react'
import { useSelector } from 'react-redux';

export default function Messages() {
	
    const messages = useSelector(store => store.messages)

    return (
        <div className='chat-box'>
            {messages.map(message =>
                <Message  key={ message.id } {...message} />
            )}
        </div>
    );
}
function Message({ text, user, date}) {

    const { name } = useSelector(store => store.user)
    const isNative = user === name

    const styles = {
		backgroundColor: `rgba(0, 0, 0, ${isNative ? 0.3 : 0.45})`,
		// float: `${isNative ? "right" : "left"}`,
	};

    return (
        <div className='message' style={styles}>
            <h3 className='msg-text'>{text} </h3>
            <hr/>
			<p className='msg-name'>{user} </p>
			<p className='msg-date'>{date} </p>
		</div>
	);
}


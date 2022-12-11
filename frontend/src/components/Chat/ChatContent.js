import React from 'react';
import { useSelector } from 'react-redux';
import { Message } from './Message';
import JoinAlert from './JoinAlert';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export default function ChatContent() {

    const {messages} = useSelector(store => store);

	return (
		<TransitionGroup>
            {messages.map(element =>
                <CSSTransition
                    timeout={200}
                    classNames={'chat-content'}
                    key={element.id}
                >
                    <>
                        {element.type === "message" && <Message {...element} />}
                        {element.type === "user" && <JoinAlert {...element} />}
                    </>
                </CSSTransition>
            )}
		</TransitionGroup>
	);
}

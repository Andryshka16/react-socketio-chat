import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createMessage } from "../../features/chat/chatSlice";
import { socket } from '../../App';
import newMessage from '../../features/chat/newMessage';
import { updateUserText } from '../../features/user/userSlice';

export function useSendMessage() {

	const dispatch = useDispatch();
	const { name, text } = useSelector((store) => store.user);

	if (!text.trim())
		return () => { };

	return () => {
		const message = newMessage(name, text);
		socket.emit('sendMessage', message);
		dispatch(createMessage(message));
		dispatch(updateUserText(""))
	};
}

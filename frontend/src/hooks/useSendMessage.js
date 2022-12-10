import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createNotification } from "../features/chat/chatSlice";
import { socket } from '../App';
import newMessage from '../features/chat/newMessage';
import { updateUserText } from '../features/user/userSlice';

export default function useSendMessage() {

	const dispatch = useDispatch();
	const { name, text } = useSelector((store) => store.user);
	const message = newMessage(name, text);

	if (!text.trim() || !name)
		return () => { };

	return () => {
		socket.emit('sendMessage', message);
		dispatch(createNotification(message));
		dispatch(updateUserText(""))
	};
}

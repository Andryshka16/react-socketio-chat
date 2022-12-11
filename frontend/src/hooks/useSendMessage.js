import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createNotification } from "../features/chat/chatSlice";
import { socket } from '../App';
import newMessage from '../features/chat/newMessage';
import { updateUserText } from '../features/user/userSlice';

export default function useSendMessage() {

	const dispatch = useDispatch();
	const { user } = useSelector((store) => store);
	const message = newMessage(user.text, user);

	if (!user.text.trim())
		return () => { };

	return () => {
		socket.emit('sendMessage', message);
		dispatch(createNotification(message));
		dispatch(updateUserText(""))
	};
}

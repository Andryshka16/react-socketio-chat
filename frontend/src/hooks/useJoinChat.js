import { useDispatch, useSelector } from 'react-redux';
import newUser from '../features/chat/newUser';
import { createNotification } from '../features/chat/chatSlice';
import { useNavigate } from 'react-router-dom';
import { socket } from '../App';

export default function useJoinChat() { 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { name } = useSelector(store => store.user)
    const user = newUser(name)

    if (!name.trim()) return () => { } 
  
    return () => {
      socket.emit("sendMessage", user)
      dispatch(createNotification(user))
      navigate("/chat") 
    }
    
}
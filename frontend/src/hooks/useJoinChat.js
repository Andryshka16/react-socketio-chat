import { useDispatch, useSelector } from 'react-redux';
import newUser from '../features/chat/newUser';
import { createNotification } from '../features/chat/chatSlice';
import { useNavigate } from 'react-router-dom';
import { socket } from '../App';
import { updateUserName } from '../features/user/userSlice';

export default function useJoinChat(name) { 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = newUser(name)

    if (!name.trim())
      return () => { } 
  
    return () => {
      socket.emit("sendMessage", user)
      dispatch(createNotification(user))
      dispatch(updateUserName(name))
      navigate("/chat") 
    }
    
}
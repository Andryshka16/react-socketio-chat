import { useDispatch } from 'react-redux';
import newUser from '../features/chat/newUser';
import { createNotification } from '../features/chat/chatSlice';
import { useNavigate } from 'react-router-dom';
import { socket } from '../App';
import { updateUserName } from '../features/user/userSlice';
import { updateText } from '../features/alert/alertSlice';

export default function useJoinChat(name) { 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = newUser(name)

    if (name.length < 3)
      return () => { 
        dispatch(updateText("Name has to contain at least 3 simbols!")) 
      } 
  
    return () => {
      socket.emit("sendMessage", user)
      dispatch(createNotification(user))
      dispatch(updateUserName(name))
      navigate("/chat") 
    }
    
}
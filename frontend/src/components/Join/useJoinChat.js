import { useDispatch, useSelector } from 'react-redux';
import newUser from '../../features/chat/newUser';
import { joinUser } from '../../features/chat/chatSlice';
import { useNavigate } from 'react-router-dom';


export default function useJoinChat() { 

    const {name} = useSelector(store => store.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    if (!name.trim()) return () => { } 
  
    return () => {
		dispatch(joinUser(newUser(name)))
		navigate("/chat") 
	}
    
}
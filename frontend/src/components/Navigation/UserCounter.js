import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { add } from '../../features/onlineUsers/onlineUsers';
import { useDispatch } from 'react-redux';
import { socket } from '../../App';

export function UserCounter() {

  const { count } = useSelector(store => store.onlineUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("userConnected",
      totalAmount => dispatch(add(totalAmount))
    );
  }, [socket]);

  return <div className='users-online'>

    <h2>{ count } online</h2>
      
  </div>
  
}

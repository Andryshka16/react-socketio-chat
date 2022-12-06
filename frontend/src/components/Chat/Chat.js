import React from 'react'
import { useSelector } from 'react-redux'
import Messages from './Messages'
import Input from './Input'


export default function Chat() {

  const { name } = useSelector(store => store.user)
  
  return (
      <div className='chat'>
        <Messages />
        <Input/>
      </div>
  )
}

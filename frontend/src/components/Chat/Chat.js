import React from 'react'
import { useSelector } from 'react-redux'
import Messages from './Messages'
import Input from './Input'


export default function Chat() {

  const { messages } = useSelector(store => store.messages)

  const styles = {

  }
  
  return (
      <div className='chat'>
        <Input/>
        <Messages />
      </div>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'

export default function Chat() {

  const { name } = useSelector(store => store.user)

  return (
      <div>
          <h1>Hey, {name}</h1>
      </div>
  )
}

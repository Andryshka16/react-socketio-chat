import React from 'react'
import { UserCounter } from './UserCounter'
import { NavLink } from 'react-router-dom'

export default function Navigation() {

  return (
    <nav>
      <NavLink to={"/"} className="title">
        <h1>Lapchat</h1>
      </NavLink>
      
      <UserCounter/>
    </nav>
  )
}

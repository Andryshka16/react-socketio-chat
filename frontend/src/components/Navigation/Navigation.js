import React from 'react'
import { NavLink } from 'react-router-dom'
import { Authorization } from './Authorization'

export default function Navigation() {

  return (
    <nav>
      <NavLink to={"/"} className="title">
        <h1>Lapchat</h1>
      </NavLink>
      
      <Authorization/>
    </nav>
  )
}

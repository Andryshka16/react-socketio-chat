import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Socials from "./Socials"
    

function LoginButton() { 
    return (
      <NavLink to={"/"}>
        <button className='login-btn'>Join</button>
      </NavLink>
    )
}

function LoggedUser({ name }) { 
  return (
    <div className='authorized-user'>
        <h2>{ name }</h2>
    </div>
  )
}

function Authorized() { 

  const { name } = useSelector(store => store.user)

  return (
    name ? <LoggedUser name={name} /> :
      <LoginButton />
  )
  
}

export default function Footer() {
  return (
    <footer >
      <Socials />
      <h3 className='copyright'>© Andryshka</h3>
      <Authorized/>
    </footer>
  )
}



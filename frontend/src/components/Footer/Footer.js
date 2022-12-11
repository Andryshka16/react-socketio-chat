import React, { useState } from 'react'
import Socials from "./Socials"
import { UserCounter } from './UserCounter'

export default function Footer() {
  
  return (
    <footer >
      <Socials />
      <h3 className='copyright'>© Andryshka</h3>
      <UserCounter/>
    </footer>
  )
}



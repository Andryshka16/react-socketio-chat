import React from 'react';
import { NavLink } from 'react-router-dom';


export function LoginButton() {
  return (
    <NavLink to={"/"}>
      <button className='login-btn'>Join</button>
    </NavLink>
  );
}

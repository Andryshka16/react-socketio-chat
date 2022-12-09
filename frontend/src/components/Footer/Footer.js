import React from 'react'
import { NavLink } from "react-router-dom"

import instagram from "../../assets/instagram.png"
import github from "../../assets/github.png"
import youtube from "../../assets/youtube.png"

const contacts = [
  {source: instagram, link: "https://www.instagram.com/andryshka.16/"},
  {source: github, link: "https://github.com/Andryshka16"},
  {source: youtube, link: "https://www.youtube.com/channel/UCnv7NbvinGxYAOxVXNOSIbg"},
]
    

function Social({ source, link }) { 
  

  return (
      <a href={link} target='_blank'>
        <img
          src={source}
          className='contacts-icon'
          alt="" />
      </a>    
  )
}

export default function Footer() {
  return (
      <footer >
          <div className='contacts'>
              {contacts.map(elm => <Social {...elm} />) }
          </div>
    </footer>
  )
}

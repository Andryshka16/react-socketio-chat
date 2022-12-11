import React from 'react';
import Contact  from "./Contact";

import instagram from "../../assets/instagram.png"
import github from "../../assets/github.png"
import youtube from "../../assets/youtube.png"
import steam from "../../assets/steam.png"

const contacts = [
  {source: instagram, link: "https://www.instagram.com/andryshka.16/"},
  {source: github, link: "https://github.com/Andryshka16"},
  {source: youtube, link: "https://www.youtube.com/channel/UCnv7NbvinGxYAOxVXNOSIbg"},
  {source: steam, link: "https://steamcommunity.com/id/Bh0p4iK/"},
]

export default function Socials() {

  return (
    <div className='contacts'>
      {contacts.map((contact) =>
        <Contact {...contact} key={contact.source} />
      )}
    </div>
  );
}

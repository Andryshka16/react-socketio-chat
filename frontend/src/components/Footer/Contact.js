import React from 'react';

export default function Contact({ source, link }) {

  return (
    <a href={link} target='_blank'>
      <img
        src={source}
        className='contacts-icon'
        alt="" />
    </a>
  );
}

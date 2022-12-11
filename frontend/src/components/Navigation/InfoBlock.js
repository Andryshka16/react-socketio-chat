import React from 'react';
import { useSelector } from 'react-redux';

export function InfoBlock() {

  const { name, avatar } = useSelector(store => store.user);

  return <>
    <img src={avatar} width={35} />
    <h1>{name}</h1>
  </>
}

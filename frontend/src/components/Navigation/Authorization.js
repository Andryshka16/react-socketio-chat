import React from 'react';
import { useSelector } from 'react-redux';
import { LoggedUserInfo } from './LoggedUserInfo';
import { LoginButton } from './LoginButton';

export function Authorization() {

  const { name } = useSelector(store => store.user);

  return name ?
    <LoggedUserInfo /> :
    <LoginButton />

}


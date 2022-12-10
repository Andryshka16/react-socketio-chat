import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoBlock } from './InfoBlock';


export function LoggedUserInfo() {

  const navigate = useNavigate();
  const [width, setWidth] = useState(false);

  const styles = {
    width: width - 19.5,
    backgroundColor: "red"
  };

  return (
    <div
      style={width ? styles : {}}
      className={`authorized-user ${width? 'btn':''}`}
      onMouseEnter={event => setWidth(event.target.clientWidth)}
      onMouseLeave={() => setWidth(false)}
      onClick={() => navigate("/")}
    >
      {!width && <InfoBlock />}
      {width && <h1 className='logout'>Logout</h1>}
    </div>
  );
}

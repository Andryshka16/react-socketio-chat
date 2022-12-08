import React from 'react';

export function UserJoined({ name }) {
    return (
        <div className='user-joined'>
            <h3>{`User ${name} has joined conversation`}</h3>
        </div>
    );
}

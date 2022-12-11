import React from 'react';

export default function JoinAlert({ name}) {

    return (
        <div className={`user-joined`}>
            <h3>{`User ${name} has joined conversation`}</h3>
        </div>
    )
}

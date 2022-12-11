import React from 'react';

export default function JoinAlert({ name, id }) {

    return (
        <div className={`user-joined`} key={id}>
            <h3>{`User ${name} has joined conversation`}</h3>
        </div>
    )
}

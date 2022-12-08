import React from 'react';
import { useState, useEffect } from "react"

export default function JoinAlert({ name }) {

	const [shown, setShown] = useState(false);

	useEffect(() => {
		setTimeout(() => setShown(true), 200);
	}, []);

    return (
        <div className={`user-joined ${shown? "shown":"hidden"}`}>
            <h3>{`User ${name} has joined conversation`}</h3>
        </div>
    );
}

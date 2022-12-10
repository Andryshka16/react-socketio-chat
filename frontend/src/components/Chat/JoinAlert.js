import React from 'react';
import { useState, useEffect } from "react"
import {CSSTransition} from "react-transition-group"

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
    // return (
    //     <CSSTransition timeout={200} classNames="my-node">
    //     <div className={`user-joined`}>
    //         <h3>{`User ${name} has joined conversation`}</h3>
    //         </div>
    //     </CSSTransition>
    // );
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateText } from '../features/alert/alertSlice';

export default function Alert() {

	const dispatch = useDispatch()
	const { text, show } = useSelector(store => store.alert)

	useEffect(() => {
		const newTimeout = setTimeout(() => dispatch(updateText("")), 1500)
		return () => clearTimeout(newTimeout)
	}, [text])

	return (
		<div className={`alert-container ${show ? "vidible" : "hidden"}`}>
			<h2>{text}</h2>
		</div>
	);
}

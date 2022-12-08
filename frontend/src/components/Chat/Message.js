import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function Message({ text, user, date }) {
	const [shown, setShown] = useState(false);

	useEffect(() => {
		setTimeout(() => setShown(true), 200);
	}, []);

	const { name } = useSelector((store) => store.user);
	const isNative = user === name;

	const styles = {
		backgroundColor: `rgba(0, 0, 0, ${isNative ? 0.3 : 0.45})`,
		margin: `10px 30px`,
		[isNative ? 'marginLeft' : 'marginRight']: 'auto',
	};

	return (
		<div
			className={`message ${!shown ? 'hidden' : 'shown'}`}
			style={styles}
		>
			<h3 className='msg-text'>{text} </h3>
			<hr />
			<p className='msg-name'>{user} </p>
			<p className='msg-date'>{date} </p>
		</div>
	);
}

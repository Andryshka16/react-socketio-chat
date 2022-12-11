import React from 'react';
import { useSelector } from 'react-redux';

export function Message({ text, user, date, avatar, id }) {

	const { name } = useSelector((store) => store.user);
	const isNative = user === name;
	const styles = {
		backgroundColor: `rgba(0, 0, 0, ${isNative ? 0.3 : 0.45})`,
		[isNative ? 'marginLeft' : 'marginRight']: 'auto',
	};

	return (
		<div
			className={'message'}
			style={styles}
		>
			<h3 className='msg-text'>{text} </h3>
			<hr />
			<div className='message-info'>
				<div className='message-author'>
					<img src={avatar} alt="" width={25} />
					<p>{user} </p>
				</div>
				<p className='msg-date'>{date.slice(0, -3)} </p>
			</div>

		</div>
	);
}

import React from 'react';
import { useSelector } from 'react-redux';

export function Message({ text, author, date }) {

	const { user } = useSelector((store) => store)
	const isNative = author.id === user.id

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
					<img src={author.avatar} alt="" width={25} />
					<p>{author.name} </p>
				</div>
				<p className='msg-date'>{date.slice(0, -3)} </p>
			</div>

		</div>
	);
}

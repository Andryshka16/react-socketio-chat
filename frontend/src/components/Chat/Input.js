import React from 'react'

export default function Input() {
  return (
		<div className='message-form'>
			<input
				type='text'
				className='message-input'
				placeholder='Your text here'
			/>
			<button className='send-message'>Send</button>
		</div>
  );
}

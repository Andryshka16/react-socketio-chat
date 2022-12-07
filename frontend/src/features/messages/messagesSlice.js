import { createSlice } from '@reduxjs/toolkit';
import newMessage from './newMessage';

const initialState = [
	newMessage('Andrey', 'Hello, world!'),
	newMessage('Maksim', 'You watsup guys'),
	newMessage('Andrey', 'Hello'),
	newMessage(
		'Nikita',
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer.'
	),
];

const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
        createMessage: (state, { payload }) => {
            const { name, value } = payload;
			state.push(newMessage(name, value));
		},
	},
});

export default messagesSlice.reducer;

export const {createMessage} = messagesSlice.actions 

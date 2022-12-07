import { createSlice } from '@reduxjs/toolkit';
import createMessage from './createMessage';

const initialState = [
	createMessage('Andrey', 'Hello, world!'),
	createMessage('Maksim', 'You watsup guys'),
	createMessage('Andrey', 'Hello'),
	createMessage(
		'Nikita',
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer.'
	),
];

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        createMessage: (state, { payload }) => { 
            state.push(payload);
        }
    }

})

export default messagesSlice.reducer;
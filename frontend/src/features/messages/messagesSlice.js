import { createSlice } from '@reduxjs/toolkit';
import createMessage from './createMessage';

const initialState = [
	createMessage('Andrey', 'asdfasdf'),
	createMessage('Andrey', 'asdfasdf'),
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
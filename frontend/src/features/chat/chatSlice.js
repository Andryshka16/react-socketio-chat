import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
        createNotification: (state, { payload }) => {
			state.push(payload);
		}
	},
});

export default messagesSlice.reducer;

export const {createNotification} = messagesSlice.actions 

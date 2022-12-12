import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    count: 0
}

const onlineUsers = createSlice({
    name: "onlineUsers",
    initialState,
    reducers: {
        add: (state, { payload }) => {
            state.count = payload
        }
    }
})

export default onlineUsers.reducer

export const { add } = onlineUsers.actions
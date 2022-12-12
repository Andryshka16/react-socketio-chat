import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: "",
    show: false,
}

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        updateText: (state, { payload }) => {
            state.text = payload
            state.show = payload.length > 0
        },
    }
})

export default alertSlice.reducer

export const {updateText} = alertSlice.actions
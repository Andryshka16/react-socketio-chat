import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    text: ""
}

const userSlice = createSlice({ 
    name: "user",
    initialState,
    reducers: {
        updateUserName: (state, { payload }) => { 
            state.name = payload
        },
        updateUserText: (state, { payload }) => { 
            state.text = payload
        }
    }
})

export default userSlice.reducer

export const { updateUserName, updateUserText } = userSlice.actions

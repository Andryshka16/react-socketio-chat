import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    text: ""
}

const userSlice = createSlice({ 
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, { payload }) => { 
            state.name = payload
        },
        updateUserText: (state, { payload }) => { 
            state.text = payload
        }
    }
})

export default userSlice.reducer

export const { updateUser, updateUserText } = userSlice.actions

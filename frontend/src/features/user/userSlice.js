import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "Andrey"
}

const userSlice = createSlice({ 
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, { payload }) => { 
            state.name = payload
        }
    }
})

export default userSlice.reducer

export const { updateUser } = userSlice.actions


import { createSlice } from "@reduxjs/toolkit"
import randomAvatar from '../../assets/avatars'

const initialState = {
    name: "",
    text: "",
    avatar: randomAvatar()
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

import { createSlice } from '@reduxjs/toolkit';


const initialState = 0

const totalUsers = createSlice({
    name: "totalUsers",
    initialState,
    reducers: {
        increase: state => state += 1,
        decrease: state => state -= 1,
    }
})

export default totalUsers.reducer

export const { increase, decrease } = totalUsers.actions
import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem("usersList") ?JSON.parse(localStorage.getItem("usersList")): [];

export const usersReducer = createSlice({
    name: 'usersReducer',
    initialState,
    reducers: {
        REPLACE: (state, action) => {
            state = action.payload.updateList;
            // console.log(state);
            //localStorage.setItem("usersList", JSON.stringify(state));
        },
    },
})

// Action creators are generated for each case reducer function
export const { REPLACE } = usersReducer.actions

export default usersReducer.reducer
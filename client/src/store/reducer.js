import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem("usersList") ?JSON.parse(localStorage.getItem("usersList")): [];

export const usersReducer = createSlice({
    name: 'usersReducer',
    initialState,
    reducers: {
        ADD: (state, action) => {
            state.push(action.payload); 
            localStorage.setItem("usersList", JSON.stringify(state));
        },
        REMOVE: (state, actions) => {
            state.splice(state.findIndex((user) => user.name === actions.payload.name),1)
            localStorage.setItem("usersList", JSON.stringify(state) );
        }
    },
})

// Action creators are generated for each case reducer function
export const { ADD, REMOVE } = usersReducer.actions

export default usersReducer.reducer
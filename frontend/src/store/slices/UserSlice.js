import { createSlice } from '@reduxjs/toolkit';

// Define an initial state
const initialState = {
    data: []
};



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUsers(state, action) {
            state.data = action.payload;
        },
        addUser(state, action) {
            state.data.push(action.payload);
        },
        removeUser(state, action) {
            state.data = state.data.filter((user) => user.id !== action.payload);
        },
        updateUser(state, action) {
            let index = state.data.findIndex((user) => user.id === action.payload.id);
            console.log("state.data[index]", state.data[index])
            state.data[index] = action.payload;
            console.log("state.data[index]", state.data[index])
        },
        searchUser(state, action) {
            state.data = action.payload;
        },
    },
});

export const { fetchUsers, addUser, removeUser, updateUser, searchUser } = userSlice.actions;
export { userSlice };
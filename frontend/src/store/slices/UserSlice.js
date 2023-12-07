import { createSlice } from '@reduxjs/toolkit';

// Define an initial state
const initialState = {
    users: [],
    teams: [],
};



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUsers(state, action) {

        },
        addUser(state, action) {

        },
        removeUser(state, action) { },
        updateUser(state, action) { },
        searchUser(state, action) { },
    },
});

export const { fetchUsers, addUser, removeUser, updateUser, searchUser } = userSlice.actions;
export { userSlice };
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an initial state
const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

// Create an asynchronous thunk to fetch data from the API
export const fetchData = createAsyncThunk('userSlice/fetchData', async () => {
    try {
        const response = await axios.get('https://user-management-backend-production.up.railway.app/api/users/');
        return response.data;
    } catch (error) {
        throw error;
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action) { },
        removeUser(state, action) { },
        updateUser(state, action) { },
        searchUser(state, action) { },
    },
    extraReducers: {
        [fetchData.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchData.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        },
        [fetchData.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export { userSlice, fetchData };
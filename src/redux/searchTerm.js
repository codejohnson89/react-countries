import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ''
}

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState,
    reducers: {
        updateText: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { updateText } = searchTermSlice.actions;

export default searchTermSlice.reducer;
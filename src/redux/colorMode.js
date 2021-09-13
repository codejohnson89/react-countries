import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: true
}


export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        darkMode: (state) => {
            state.value = !state.value
        }
        
    }
})

export const { darkMode } =  colorSlice.actions;
export default colorSlice.reducer;
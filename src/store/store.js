import { configureStore } from '@reduxjs/toolkit';
import  colorReducer  from '../redux/colorMode';
import searchTermReducer from '../redux/searchTerm';


export const store = configureStore({
    reducer: {
        color: colorReducer,
        searchTerm: searchTermReducer
    }
});
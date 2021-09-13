import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { updateText } from '../redux/searchTerm';


const SearchBar = () => {
    const query = useSelector((state) => state.searchTerm.value)
    const dispatch = useDispatch();
    return (
        <>
            <form>
                <input 
                    className="search" 
                    type="search" 
                    placeholder="Search for a country" 
                    value={query} 
                    onChange={(e) => dispatch(updateText(e.target.value))}/>
            </form>
        </>
    )
}

export default SearchBar;
import React from 'react';


export default function SearchBar(props){

    return(
        <div className="searchBarDiv">
            <label for='searchBar'></label>
            <input name='searchBar'></input>
            <button type='submit'>SEARCH</button>
        </div>
    )
}
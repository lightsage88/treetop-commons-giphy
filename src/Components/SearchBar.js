import React from 'react';


export default function SearchBar(props){

    function updateInputString(string){
        console.log(`updateInputString running with: ${string}`);
        if(props.onChange){
            props.onChange(string);
        }

    }

    function startSearching(){
        console.log('start searching running.');
        if(props.onSubmit){
            props.onSubmit()
        }
    }

    

    return(
        <div className="searchBarDiv">
            <label htmlFor='searchBar'></label>
            <input type='text' onChange={(e)=> updateInputString(e.target.value)} name='searchBar'></input>
            <button type='submit' onClick={()=> startSearching()}>SEARCH</button>
        </div>
    )
}
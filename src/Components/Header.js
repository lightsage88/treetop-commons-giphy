import React from "react"
import SearchBar from './SearchBar';
export default function Header(props) {
    return (
        <div>
            <h1>Search For Something, Willya?</h1>
            <SearchBar onChange={(e) => props.onChangeFromHeader(e)} onSubmit={(e)=>props.onSubmitFromHeader(e)}/>
            <span className='headerSpan'>Items found: {props.count}</span>
        </div>
    )
}
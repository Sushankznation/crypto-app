import React from "react";
import '../App.css'
function Search({searchCoin,value}){

    return(
        <div className="inputcon">
            <input className="search" placeholder="Search here" type="text" onChange={searchCoin} value={value}></input>
        </div>
    )
}

export default Search;
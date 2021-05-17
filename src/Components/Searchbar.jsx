import React from 'react'
import Style from './CSS/Home.module.scss'

function Searchbar() {
    return (
        <div>
            <h1>Search</h1>
            <input className="searchBar" placeholder ="Search..."></input>
            <button className ="searchBarButton">Search</button>
        </div>
    )
}

export default Searchbar

import React from 'react'
import Style from './CSS/Home.module.scss'
import TestImage from '../img/TestImage.jpg'

function Searchbar() {
    return (
        <div>
            <input type="text" className={Style.searchBar} placeholder ="Search..."></input>
            <button className ={Style.searchBarButton}>Search</button>

            <div className={Style.imgContainer}>
                <img src={TestImage} className={Style.images}></img>
            </div>
        </div>
    )
    
}

export default Searchbar

import React from 'react'
import Style from './CSS/Navbar.module.scss'
import Logo from '../img/logo.png'

function Navbar() {
    return (
        <div className={Style.navbar}>
            <img src={Logo}></img>
        </div>
    )
}

export default Navbar

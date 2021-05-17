import React from 'react'
import Style from './CSS/Navbar.module.scss'
import Logo from '../img/logo.png'
var back = "";
var profile = "";

function Navbar({ backBtn, profileBtn }) {
    
    if (backBtn == true)
        back = <i className="fas fa-chevron-left fa-2x"></i>
    else 
        back = ""
    

    if (profileBtn == true)
        profile = <i className="fas fa-user fa-2x"></i>
    else 
        profile = ""
    
    return (
        <div className={Style.navbar}>
            <a className={Style.left} href="/">{back}</a>
            <img src={Logo}></img>
            <a className={Style.right} href="/">{profile}</a>
        </div>
    )
}

export default Navbar

import React from 'react'
import Style from './CSS/navbar.module.scss'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'

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
            <Link className={Style.left} to="/">{back}</Link>
            <img src={Logo} alt="logo"/>
            <Link className={Style.right} to="/profile">{profile}</Link>
        </div>
    )
}

export default Navbar

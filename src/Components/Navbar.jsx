import React, { useState, useEffect } from 'react'
import Style from './CSS/navbar.module.scss'
import Logo from '../img/logo.png'

const Navbar = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        let mounted = true
        var listener = document.addEventListener("scroll", e => {
            if (mounted) {
                const scrolled = document.documentElement.scrollTop;
                if (scrolled > 10){
                setVisible(true)
                } 
                else if (scrolled <= 10){
                setVisible(false)
                }
            }
        })

        return () => {
          document.removeEventListener("scroll", listener)
          mounted = false
        }
    }, [visible])

    return (
        <nav className={`${ visible ? Style.navbarSmall : Style.navbar}`}>
            <img src={Logo} alt="logo"/>
        </nav>
    )
}

export default Navbar

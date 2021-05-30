import React, { useState, useEffect } from 'react'
import Style from './CSS/navbar.module.scss'
import Logo from '../img/logo.png'

const Navbar = () => {
    const [size, setSize] = useState(false)

    useEffect(() => {
        let mounted = true
        var listener = document.addEventListener("scroll", e => {
            if (mounted) {
                const scrolled = document.documentElement.scrollTop;
                if (scrolled > 10){
                setSize(true)
                } 
                else if (scrolled <= 10){
                setSize(false)
                }
            }
        })

        return () => {
          document.removeEventListener("scroll", listener)
          mounted = false
        }
    }, [size])

    return (
        <nav className={`${ size ? Style.navbarSmall : Style.navbar}`}>
            <img src={Logo} alt="logo"/>
        </nav>
    )
}

export default Navbar

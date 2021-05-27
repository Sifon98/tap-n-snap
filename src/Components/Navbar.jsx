import React, { useState, useEffect } from 'react'
import Style from './CSS/navbar.module.scss'
import Logo from '../img/logo.png'

const Navbar = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        var listener = document.addEventListener("scroll", e => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 100){
              setVisible(true)
            } 
            else if (scrolled <= 100){
              setVisible(false)
            }
        })

        return () => {
          document.removeEventListener("scroll", listener)
        }
    }, [visible])

    return (
        <nav className={`${ visible ? Style.navbarSmall : Style.navbar}`}>
            <img src={Logo} alt="logo"/>
            {/* <FaArrowCircleUp onClick={scrollToTop} /> */}
        </nav>
    )
}

export default Navbar

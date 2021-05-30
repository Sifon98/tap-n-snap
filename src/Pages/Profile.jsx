import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Style from './CSS/profile.module.scss'
import Image from '../img/IMG_7468.png'

function Profile() {
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
        <div>
            <div className={`${ visible ? Style.iHelperSmall : Style.iHelper}`}>
                <i className="fas fa-cog fa-2x"></i>
            </div>
            <div className={Style.wrapper}>
                <img className={Style.profileImg} src={Image}></img>
                <div className={Style.profileInfo}>
                    <p className={Style.h1}>JOHN DOE</p>
                    <p>johndoe@gmail.com</p>
                </div>
            </div>
            <hr/>
            <div className={Style.imagesWrapper}>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
                <img src="https://i.imgur.com/lqjy3m1.jpg"></img>
            </div>
        </div>
    )
}

export default Profile

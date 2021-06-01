import React, { useState, useEffect } from 'react'
import Style from './CSS/profile.module.scss'
import Image from '../img/IMG_7468.png'
import { Link } from 'react-router-dom'

function Profile() {
    const [visible, setVisible] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const user = async() => {
      const response = await fetch('http://localhost:4000/user', {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        });

        const content = await response.json();

        setName(content.name);
        setEmail(content.email);
    }

    useEffect(() => user())


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
                <Link to="/logout">
                    <i className="fas fa-cog fa-2x"></i>
                </Link>
            </div>
            <div className={Style.wrapper}>
                <img className={Style.profileImg} src={Image}></img>
                <div className={Style.profileInfo}>
                    <p className={Style.h1}>{name}</p>
                    <p>{email}</p>
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

import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Style from './CSS/profile.module.scss'

function Profile() {
    const backBtn = true;
    const profileBtn = false;
    const cameraBtn = true;
    const imageBtn = true;

    return (
        <div>
            <Navbar backBtn={backBtn} profileBtn={profileBtn}/>
            <div className={Style.wrapper}>
                <div className={Style.profileInfo}>
                    <h1>JOHN DOE</h1>
                    <p>johndoe@gmail.com</p>
                </div>
                <i className="fas fa-cog fa-4x"></i>
            </div>
            <hr/>
            <div className={Style.imgWrapper}>
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
            <Footer cameraBtn={cameraBtn} imageBtn={imageBtn}/>
        </div>
    )
}

export default Profile

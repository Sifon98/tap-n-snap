import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './Home.css'

function Home() {
    const backBtn = false;
    const profileBtn = true;
    const cameraBtn = true;
    const imageBtn = true;


    return (
        <div>
            <Navbar backBtn={backBtn} profileBtn={profileBtn}/>
            <div className="testDiv"></div>
            <Footer cameraBtn={cameraBtn} imageBtn={imageBtn}/>
            
        </div>
    )
}

export default Home

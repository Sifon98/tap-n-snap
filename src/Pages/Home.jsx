import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Home() {
    const backBtn = false;
    const profileBtn = true;
    const cameraBtn = true;
    const imageBtn = true;


    return (
        <div>
            <Navbar backBtn={backBtn} profileBtn={profileBtn}/>
            <Footer cameraBtn={cameraBtn} imageBtn={imageBtn}/>
            
        </div>
    )
}

export default Home

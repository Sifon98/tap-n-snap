import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Searchbar from '../Components/Searchbar'

function Home() {
    const backBtn = false;
    const profileBtn = false;
    const cameraBtn = false;
    const imageBtn = false;


    return (
        <div>
            <Navbar backBtn={backBtn} profileBtn={profileBtn}/>
            <Searchbar />
            <Footer cameraBtn={cameraBtn} imageBtn={imageBtn}/>
            
        </div>
    )
}

export default Home

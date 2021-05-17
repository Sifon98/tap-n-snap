import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Home() {
    const backBtn = false;
    const profileBtn = true;

    return (
        <div>
            <Navbar backBtn={backBtn} profileBtn={profileBtn}/>
            <Footer/>
            
        </div>
    )
}

export default Home

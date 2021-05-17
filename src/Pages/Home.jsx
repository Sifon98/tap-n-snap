import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Searchbar from '../Components/Searchbar'

function Home() {
    const backBtn = false;
    const profileBtn = true;

    return (
        <div>
            <Navbar backBtn={backBtn} profileBtn={profileBtn}/>
            <Searchbar />
            <Footer/>
            
        </div>
    )
}

export default Home

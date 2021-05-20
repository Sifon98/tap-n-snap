import React from 'react'
import Navbar from '../Components/Navbar'
import '../Components/CSS/start.css'

function Start() {
  return (
    <div>
        <div className="div">
            <Navbar />

            <br />
            <button type="submit">Login</button>

            <button type="submit">Register</button>

        </div>      
    </div>
  )
}

export default Start

import React  from 'react'
import Navbar from '../Components/Navbar'
import Style from '../Components/CSS/start.module.scss'

function Start() {
  return (
    <div>
        <Navbar />

        <div className={Style.start}>
            
            <br />
            <button type="submit"
                    className={Style.btnsl}>Login</button>
            <br/>
        
            <button type="submit"
                    className={Style.btns}>Register</button> 
        </div>             
    </div>
  )
}

export default Start

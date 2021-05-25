import React  from 'react'
import Navbar from '../Components/Navbar'
import Style from '../Components/CSS/start.module.scss'

function Start() {
  return (
    <div>
      <br/>
      <br/>
      <br/>
        <Navbar />

        <div className={Style.body}>

        
            <button type="submit"
                    className={Style.btnslo}>Login</button>

                    <br />

            <button type="submit"
                    className={Style.btnsl}>Register</button>

        </div>            
    </div>
  )
}

export default Start

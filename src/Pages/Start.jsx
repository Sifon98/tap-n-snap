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
        <h4 className={Style.h4}>Share with the tap of a button</h4>

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

import React from 'react'
import Style from './CSS/logOut.module.scss'
import Navbar from '../Components/Navbar'

function LogOut() {
  return (
    <div>
      <br />
      <br />

        <h3 className={Style.h31}>Change Name:</h3>
        <h3 className={Style.h3}>Change Email:</h3>
        <h3 className={Style.h3}>Push notiser</h3>
        <h3 className={Style.h3}>Push notiser</h3>

        <button type="submit" className={Style.btnlt}>SIGN OUT</button>

        <br />

        <i class="fas fa-chevron-left"></i>
      
    </div>
  )
}

export default LogOut

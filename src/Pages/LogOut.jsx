import React from 'react'
import Style from './CSS/logOut.module.scss'
import { Link } from 'react-router-dom'
import logoImg from '../img/logo.png'

function LogOut() {
      
       const signOut = async () => {
        await fetch("http://localhost:4000/logout", {
          method: "post",
          headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
          },
          credentials: 'include',
  })
       }

  return (
    <div className={Style.wrapper}>
      <br />
      <br />
      <img className={Style.img} src={logoImg}></img>

        <h3 className={Style.h31}>Change Name:</h3>
        <h3 className={Style.h3}>Change Email:</h3>
        <h3 className={Style.h3}>Push notiser</h3>
        <h3 className={Style.h3}>Push notiser</h3>

        <Link to="/">
            <button type="button" className={Style.btnlt} onClick={signOut}>SIGN OUT</button>
        </Link>
        <br />
        <Link to="/profile">
            <i className="fas fa-chevron-left"></i>        
        </Link>
      
    </div>
  )
}

export default LogOut

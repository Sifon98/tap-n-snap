import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Style from './CSS/start.module.scss'

function Start() {
  return (
    <div className={Style.container}>
      <br />
      <br />
      <h4 className={Style.h4}>Share with the tap of a button</h4>

      <div className={Style.body}>
        <Link to="/login">
          <button type="submit" className={Style.btn}>Login</button>
        </Link>
        <br />
        <Link to="/register">
          <button type="submit" className={Style.btn}>Register</button>
        </Link>
      </div>
    </div>
  )
}

export default Start

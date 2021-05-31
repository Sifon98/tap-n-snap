import React from 'react'
import { Link } from 'react-router-dom'
import Style from './CSS/start.module.scss'
import logoImg from '../img/logo.png'

function Start() {
  return (
    <div className={Style.container}>
      <br />
      <br />
      <img className={Style.img} src={logoImg}></img>
      <h4 className={Style.h4}>Share with the tap of a button</h4>

      <div className={Style.body}>
        <Link to="/login">
          <button  className={Style.btn}>SIGN IN</button>
        </Link>
        <br />
        <Link to="/register">
          <button className={Style.btn}>REGISTER</button>
        </Link>
      </div>
    </div>
  )
}

export default Start

import React from 'react'
import Style from '../Components/CSS/login.module.scss'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>

          <br />
      <Navbar />
      <input type="email"
                        placeholder="Username..."
                        className={Style.inputl}
                 />
          <br />
        <input type="password"
                        placeholder="Password..."
                        className={Style.input}
                 />
          <br />
        <button type="submit"         
                className={Style.btnl}>SIGN IN</button>
          <br />

      <small>Don't have an account?</small> <Link className={Style.a}  to='/register'>Register</Link>     
    </div>
  )
}

export default Login

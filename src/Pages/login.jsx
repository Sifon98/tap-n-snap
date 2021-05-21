import React from 'react'
import Style from '../Components/CSS/login.module.scss'
import Navbar from '../Components/Navbar'


function Login() {
  return (
    <div >
      
      <Navbar />
      <br />
      <h1>Login</h1>
      <div className={Style.divarl}>
               <input type="email"
                      placeholder="Username..."
                      className={Style.input}
               />
      </div>
      <div className={Style.divarl}>
        <input type="password"
               placeholder="Password"
               className={Style.input}
        />
      </div>

      <button type="submit"
              className={Style.btnl}>Login</button>

       <br />
       <small>Don't have an account?<a href="#">Register</a></small>            
    </div>
  )
}

export default Login

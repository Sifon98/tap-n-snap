import React from 'react'
import '../Components/CSS/login.css'
import Navbar from '../Components/Navbar'


function login() {
  return (
    <div>
      <Navbar />
      <br />
      <h1>Login</h1>
      <div className="divarl">
               <input type="email"
                      placeholder="Username..."
                      className="input"
               />
      </div>
      <div className="divarl">
        <input type="password"
               placeholder="Password"
               className="input"
        />
      </div>

      <button type="submit"
              className="btnl">Login</button>

       <br />
       <small>Don't have an account?<a href="#">Register</a></small>       
    </div>
  )
}

export default login

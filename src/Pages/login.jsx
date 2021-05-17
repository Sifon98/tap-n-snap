import React from 'react'
import '../Components/CSS/login.css'


function login() {
  return (
    <div>
      <h1>Login</h1>
      <div className="divar">
        <label htmlFor="inputEmail"
               className="label">Email adress</label>
               <input type="email"
                      placeholder="Enter email"
                      className="input"
               />
      </div>
      <div className="divar">
        <label htmlFor="inputpassword"
               className="label">Password</label>
        <input type="password"
               placeholder="Password"
               className="input"
        />
      </div>

      <button type="submit"
              className="btn">Submit</button>

       <br />
       <small>Don't have an account?<a href="#">Register</a></small>       
    </div>
  )
}

export default login

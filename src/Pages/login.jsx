import React from 'react'
import '../Components/CSS/login.css'

function login() {
  return (
    <div className="general">
        <form >

          <h1>Register</h1>
            <div className="divar">
                <label htmlFor="inputEmail"
                       className="label">Email adress</label> <br />
                <input type="email"
                       placeholder="Enter email"
                       className="input"
                />
            </div>
            <div className="divar">
              <label htmlFor="inputpasword"
                     className="label">Password</label> <br/>
              <input type="password"
                     placeholder="Password"
                     className="input"
              />                              
            </div>
            <div className="divar">
              <label htmlFor="inputPasswordConfirmation"
                     className="label">Confirm</label> <br />
              <input type="password"
                     placeholder="Confirm password"
                     className="input"
              />
            </div>
            <button type="submit"
                    className="btn">Register</button>
        </form>
      
    </div>
  )
}

export default login

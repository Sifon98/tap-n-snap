import React from 'react'

function login() {
  return (
    <div>
        <form >

          <h1>Register</h1>
            <div className="email">
                <label htmlFor="inputEmail">Email adress</label> <br />
                <input type="email"
                       placeholder="Enter email"
                />
            </div>
            <div className="password">
              <label htmlFor="inputpasword">Password</label>
              <input type="password"
                     placeholder="Password"
              />                              
            </div>
            <div>
              <label htmlFor="inputPasswordConfirmation">Confirm Password</label>
              <input type="password"
                     placeholder="Confirm password"
              />
            </div>
            <button type="submit"
                    className="btn">Register</button>
        </form>
      
    </div>
  )
}

export default login

import React from 'react'
import Styles from '../Components/CSS/login.module.scss'
import Navbar from '../Components/Navbar'


function Login() {
  return (
    <div>
      <Navbar />
      <div className={Styles.Login}>
        <h1>Login</h1>
        <div className={Styles.divarl}>
                 <input type="email"
                        placeholder="Username..."
                        className={Styles.input}
                 />
        </div>
        <div className={Styles.divarl}>
          <input type="password"
                 placeholder="Password"
                 className={Styles.input}
          />
        </div>

        <button type="submit"
                className={Styles.btnl}>Login</button>

         <br />
         <small>Don't have an account?<a href="#">Register</a></small>
      </div>
    </div>
  )
}

export default Login

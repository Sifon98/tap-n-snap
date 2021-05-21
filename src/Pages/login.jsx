import React from 'react'
import styles from '../Components/CSS/login.module.scss'
import Navbar from '../Components/Navbar'


function Login() {
  return (
    <div>
      <Navbar />
      <div className={styles.Login}>
        <h1>Login</h1>
        <div className={styles.divarl}>
                 <input type="email"
                        placeholder="Username..."
                        className={styles.input}
                 />
        </div>
        <div className={styles.divarl}>
          <input type="password"
                 placeholder="Password"
                 className={styles.input}
          />
        </div>

        <button type="submit"
                className={styles.btnl}>Login</button>

         <br />
         <small>Don't have an account?<a href="#">Register</a></small>
      </div>
    </div>
  )
}

export default Login

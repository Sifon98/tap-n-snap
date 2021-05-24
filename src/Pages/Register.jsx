import React from 'react'
import styles from '../Components/CSS/register.module.scss'
import Navbar from '../Components/Navbar'

function Register() {
  return (
    <div>
       <Navbar />
       <div className={styles.divr}>
         <h1>Register</h1>
                            
              <input type="username"
                     placeholder="Username..."
                     className={styles.inputr}
              />              
              <br />        
              <input type="password"
                     placeholder="Password"
                     className={styles.inputr}
              />                  
               <br />        

              <input type="email"
                     placeholder="Email"
                     className={styles.inputr}
              />              
              <br />           
              <button type="submit"
                    className={styles.btn}>Create</button>

                <br />
              <small>Already have an account?<a href="#">Login here</a></small>             
        </div>
    </div>
  )
}

export default Register

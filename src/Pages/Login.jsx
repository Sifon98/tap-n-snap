import React from 'react'
import style from './CSS/login.module.scss'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div>
        <br />
        <Navbar />
           
        <i className="fas fa-user" ></i>
        <input type="email"          
                placeholder="  Username... " 
                className={style.inputl}
        />
      
        <br />
        
        <i className="fas fa-key" ></i>
        <input type="password"
                placeholder="  Password..."
                className={style.input}
          />
    
        <br />
        <button type="submit"         
                className={style.btnl}>SIGN IN</button>
        <br />

        <small>Don't have an account?</small> <Link className={style.a}  to='/register'>Register</Link>     
    </div>
  )
}

export default Login
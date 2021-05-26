import React from 'react'
import style from '../Components/CSS/login.module.scss'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faKey} from '@fortawesome/free-solid-svg-icons'


function Login() {
  return (
    <div>
        <br />
        <Navbar />
    
        <FontAwesomeIcon icon={faUser} className={style.faicon}/>  
        <input type="email"          
                placeholder="  Username... " 
                className={style.inputl}
        />
      
        <br />
        <FontAwesomeIcon icon={faKey} className={style.faicon}/>
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

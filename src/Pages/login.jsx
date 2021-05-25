import React from 'react'
import Style from '../Components/CSS/login.module.scss'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import userLogo from '../img/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faKey} from '@fortawesome/free-solid-svg-icons'


function Login() {
  return (
    <div>
        <br />
        <Navbar />
    
        <FontAwesomeIcon icon={faUser} className={Style.faicon}/>  
        <input type="email"          
                placeholder="  Username... " 
                className={Style.inputl}
        />
      
        <br />
        <FontAwesomeIcon icon={faKey} className={Style.faicon}/>
        <input type="password"
                placeholder="  Password..."
                className={Style.input}
          />
    
        <br />
        <button type="submit"         
                className={Style.btnl}>SIGN IN</button>
        <br />

        <small>Don't have an account?</small> <Link className={Style.a}  to='/register'>Register</Link>     
    </div>
  )
}

export default Login

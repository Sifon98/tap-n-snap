import React from 'react'
import Style from '../Components/CSS/register.module.scss'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faKey} from '@fortawesome/free-solid-svg-icons'

function Register() {
  return (
    <div>
           <br />
           <br />
       <Navbar />
       <FontAwesomeIcon icon={faUser} className={Style.faicon}/> 
       <input type="username"
               placeholder="  Username..."
               className={Style.inputr1} />
               <br />
        <FontAwesomeIcon icon={faEnvelope} className={Style.faicon}/>
        <input type="email"
               placeholder="  Email..."
               className={Style.inputr} />       
               <br />
        <FontAwesomeIcon icon={faKey} className={Style.faicon}/>       
        <input type="password"
               placeholder="  Password..."
               className={Style.inputr} />
               <br />
        <FontAwesomeIcon icon={faKey} className={Style.faicon}/>       
        <input type="password"
               placeholder="  Confirm Password..."
               className={Style.inputr} />
               <br />

        <button type="submit"
                className={Style.btn}>SIGN UP</button> 

              <br />
        <small>Already have an account?</small>     <Link className={Style.a}  to='/login'>Login here</Link>  
       

    </div>
  )
}

export default Register

import React from 'react'
import Style from './CSS/register.module.scss'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
           <br />
           <br />
       <Navbar />
       
       <i className="fas fa-user" ></i>
       <input type="username"
               placeholder="  Username..."
               className={Style.inputr1} />
               <br />
        
        <i className="fas fa-envelope"></i>
        <input type="email"
               placeholder="  Email..."
               className={Style.inputr} />       
               <br />
         
        <i className="fas fa-key" ></i>      
        <input type="password"
               placeholder="  Password..."
               className={Style.inputr} />
               <br />
         
        <i className="fas fa-key" ></i>     
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

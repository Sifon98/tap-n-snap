import React from 'react'
import Style from '../Components/CSS/register.module.scss'
import Navbar from '../Components/Navbar'

function Register() {
  return (
    <div>
           <br />
       <Navbar />
       <input type="username"
               placeholder="Username..."
               className={Style.inputr1} />
               <br />
        <input type="email"
               placeholder="Email..."
               className={Style.inputr} />       
               <br />
        <input type="password"
               placeholder="Password..."
               className={Style.inputr} />
               <br />
        <input type="password"
               placeholder="Confirm Password..."
               className={Style.inputr} />
               <br />

        <button type="submit"
                className={Style.btn}>SIGN UP</button> 

              <br />
        <small>Already have an account?    <a href="#">Login here</a></small>   
       

    </div>
  )
}

export default Register

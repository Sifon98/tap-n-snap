import React from 'react'
import '../Components/CSS/register.css'
import Navbar from '../Components/Navbar'

function Register() {
  return (
    <div className="divr">

       <Navbar />
         <br />
         <h1>Register</h1>
                            
              <input type="username"
                     placeholder="Username..."
                     className="inputl"
              />              
              <br />        
              <input type="password"
                     placeholder="Password"
                     className="inputl"
              />                  
               <br />        

              <input type="email"
                     placeholder="Email"
                     className="inputl"
              />              
              <br />           
              <button type="submit"
                    className="btn">Create</button>

                <br />
              <small>Already have an account?<a href="#">Login here</a></small>             
    </div>
  )
}

export default Register

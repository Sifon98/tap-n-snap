import React from 'react'
import '../Components/CSS/register.css'
import Navbar from '../Components/Navbar'

function register() {
  return (
    <div >

       <Navbar />
         <br />
         <h1>Register</h1>
              <div className="divar">               
                     <input type="username"
                            placeholder="Username..."
                            className="inputl"
                />
              </div>
              <div className="divar">
                     <input type="password"
                            placeholder="Password"
                            className="inputl"
                     />
              </div>                                           
              <div className="divar">
                     <input type="email"
                            placeholder="Email"
                            className="inputl"
                     />
              </div>
              
            
            <button type="submit"
                    className="btn">Create</button>

                <br />
             <small>Already have an account?<a href="#">Login here</a></small>       
       
      
    </div>
  )
}

export default register

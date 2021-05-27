import React, { useState } from 'react'
import Style from './CSS/register.module.scss'
import Navbar from '../Components/Navbar'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

function Register() {

       const [isLoggedIn, setIsLoggedIn] = useState(false);
       const [userName, setUserName] = useState('');
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');

       const uploadUser = async e => {
              e.preventDefault();
              // If any field is blank don't send request
              if (!userName && !email && !password) { return; }

              fetch("http://localhost:4000/register", {
                     method: "post",
                     headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({
                            name:     userName,
                            email:    email,
                            password: password
                     })
              })
              .then(res => res.json())
              .then(data => {
              console.log(data.message)
                     if (data.message === 'User Added succesfully!') {
                            setIsLoggedIn(true);
                     }
              })
              .catch(error => console.log('ERROR!', error));
       }

       return isLoggedIn ? <Redirect to="/" /> : (
              <div>
                     <br />
                     <br />
                     <Navbar />
                     <form onSubmit={uploadUser}>
                            <i className="fas fa-user" ></i>
                            <input type="username" placeholder="  Username..." 
                                   className={Style.inputr1} onChange={e => setUserName(e.target.value)} />
                                   <br />
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="  Email..." 
                                   className={Style.inputr} onChange={e => setEmail(e.target.value)} />       
                                   <br />
                            <i className="fas fa-key" ></i>      
                            <input type="password" placeholder="  Password..." 
                                   className={Style.inputr} onChange={e => setPassword(e.target.value)} />
                                   <br />
                            <i className="fas fa-key" ></i>     
                            <input type="password" placeholder="  Confirm Password..." className={Style.inputr} />
                                   <br />
                            <button type="submit" className={Style.btn}>SIGN UP</button> 
                     </form>       
                     <br />
                     <small>Already have an account?</small><Link className={Style.a} to='/login'>Login here</Link>  
                     

              </div>
       )
}

export default Register

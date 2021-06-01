import React, { useState } from 'react'
import Style from './CSS/register.module.scss'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import logoImg from '../img/logo.png'
import DelayLink from 'react-delay-link'

function Register() {
       const [isLoggedIn, setIsLoggedIn] = useState(false);

       const [userName, setUserName] = useState('');
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');

       const [transition, setTransition] = useState(false)
       const [transitionImg, setTransitionImg] = useState(false)

       const change = () => {
              setTransition(true)
       }

       const changeImg = () => {
              setTransition(true)
              setTransitionImg(true)
       }

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
                            name: userName,
                            email,
                            password
                     })
              })
              .then(res => res.json())
              .then(data => {
              console.log(data.message)
                     if (data.message === 'User Added succesfully!') {
                            const timer = setTimeout(() => {
                                   setIsLoggedIn(true);
                            }, 700);
                     }
              })
              .catch(error => console.log('ERROR!', error));
       }

       return isLoggedIn ? <Redirect to="/home" /> : (
              <div className={Style.wrapper}>
                     { transitionImg ? <img className={Style.imgChange} src={logoImg} /> : <img className={Style.img} src={logoImg} />}
                     {transition ?
                            <form className={Style.formChange} onSubmit={uploadUser}>
                                   <div className={Style.inputFieldUser}>
                                          <i className="fas fa-user" ></i>
                                          <input type="username" placeholder="  Username..." className={Style.inputUsername} onChange={e => setUserName(e.target.value)} autoComplete="off"/><br />
                                   </div>
                                   <div className={Style.inputFieldMail}>
                                          <i className="fas fa-envelope"></i>
                                          <input type="email" placeholder="  Email..." className={Style.inputRest} onChange={e => setEmail(e.target.value)} autoComplete="off"/><br />
                                   </div>
                                   <div className={Style.inputFieldPass}>
                                          <i className="fas fa-key" ></i>      
                                          <input type="password" placeholder="  Password..." className={Style.inputRest} onChange={e => setPassword(e.target.value)} autoComplete="off"/><br />
                                   </div>
                                   <div className={Style.inputFieldConPass}>
                                          <i className="fas fa-key" ></i>     
                                          <input type="password" placeholder="  Confirm Password..." className={Style.inputRest} autoComplete="off"/><br />
                                   </div>
                                   <button type="submit" className={Style.btn} onChange={changeImg}>SIGN UP</button>
                            </form>
                            :<form className={Style.form} onSubmit={uploadUser}>
                                   <div className={Style.inputFieldUser}>
                                          <i className="fas fa-user" ></i>
                                          <input type="username" placeholder="  Username..." className={Style.inputUsername} onChange={e => setUserName(e.target.value)} autoComplete="off"/><br />
                                   </div>
                                   <div className={Style.inputFieldMail}>
                                          <i className="fas fa-envelope"></i>
                                          <input type="email" placeholder="  Email..." className={Style.inputRest} onChange={e => setEmail(e.target.value)} autoComplete="off"/><br />
                                   </div>
                                   <div className={Style.inputFieldPass}>
                                          <i className="fas fa-key" ></i>      
                                          <input type="password" placeholder="  Password..." className={Style.inputRest} onChange={e => setPassword(e.target.value)} autoComplete="off"/><br />
                                   </div>
                                   <div className={Style.inputFieldConPass}>
                                          <i className="fas fa-key" ></i>     
                                          <input type="password" placeholder="  Confirm Password..." className={Style.inputRest} autoComplete="off"/><br />
                                   </div>
                                   <button type="submit" className={Style.btn} onChange={changeImg}>SIGN UP</button>
                            </form>
                     }
                     <br />
                     { 
                     transition ? 
                            <p className={Style.pChange}>Already have an account?<DelayLink delay={700} to='/login'><p className={Style.link} onClick={change}>Sing In</p></DelayLink></p>
                            :<p className={Style.p}>Already have an account?<DelayLink delay={700} to='/login'><p className={Style.link} onClick={change}>Sing In</p></DelayLink></p>
                     }
              </div>
       )
}

export default Register

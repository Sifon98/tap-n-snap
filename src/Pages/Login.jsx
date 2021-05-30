import React, { useState } from 'react'
import Style from './CSS/login.module.scss'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async e => {
        e.preventDefault();
        // If any field is blank don't send request
        if (!email && !password) { return; }
        
          fetch("http://localhost:4000/login", {
                  method: "post",
                  headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        email: email,
                        password: password
                  })
          })
          .then(res => res.json())
          .then(data => {
            console.log(data.message)
            if (data.message === 'Login Succesful!') {
              setIsLoggedIn(true);
            }
          })
          .catch(error => console.log('ERROR!', error));
  }

  return isLoggedIn ? <Redirect to="/" /> : ( // conditional rendering with react (with ternary operators) <--
    <div className={Style.wrapper}>
        <br />
        <form onSubmit={login}>
            <i className="fas fa-user" ></i>
            <input type="email"          
                    placeholder="  Email... " 
                    className={Style.inputl}
                    onChange={e => setEmail(e.target.value)} 
            />          
            <br />           
            <i className="fas fa-key" ></i>
            <input type="password"
                    placeholder="  Password..."
                    className={Style.input}
                    onChange={e => setPassword(e.target.value)} 
              />       
            <br />
            <button type="submit" className={Style.btnl}>SIGN IN</button>
        </form>     
        <br />
        <small>Don't have an account?</small> <Link className={Style.a} to='/register'>Register</Link>     
    </div>
  )
}

export default Login
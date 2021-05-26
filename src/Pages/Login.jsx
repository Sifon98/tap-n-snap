import React, { useState } from 'react'
import Style from './CSS/login.module.scss'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'


function Login() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = async e => {
        e.preventDefault();
        // If any field is blank don't send request
        if (!userName && !email && !password) { return; }
        
        try {
          fetch("http://localhost:4000/login", {
                  method: "post",
                  headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        username: userName,
                        password: password
                  })
          })

          console.log('User logged in');

        } catch (error) {
          console.log(error);
        }
  }

  return (
    <div>
        <br />
        <Navbar />
        <form method="POST" onSubmit={login}>
            <i className="fas fa-user" ></i>
            <input type="username" placeholder="  Username..." 
                    className={Style.inputl} onChange={e => setUserName(e.target.value)} />
                    <br />
            <i className="fas fa-key" ></i>      
            <input type="password" placeholder="  Password..." 
                    className={Style.input} onChange={e => setPassword(e.target.value)} />
                    <br />
            {/*
            <i className="fas fa-user" ></i>
            <input type="email"          
                    placeholder="  Username... " 
                    className={style.inputl}
            />        
            <br />            
            <i className="fas fa-key" ></i>
            <input type="password"
                    placeholder="  Password..."
                    className={style.input}
              />       
            <br />
            */}
            <button type="submit"         
                    className={Style.btnl}>SIGN IN</button>
        </form>
        
        <br />

        <small>Don't have an account?</small> <Link className={Style.a}  to='/register'>Register</Link>     
    </div>
  )
}

export default Login
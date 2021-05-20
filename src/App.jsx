import React from 'react'
import './Components/CSS/home.module.scss'
import './App.css'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import login from './Pages/login'
import register from './Pages/register'
import camera from './Pages/CameraPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/' exact component={Home}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/login' component={login}/>
          <Route path='/register' component={register}/>
          <Route path='/camera' component={camera}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App

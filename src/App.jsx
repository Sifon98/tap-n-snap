import React from 'react'
import './Components/CSS/Home.module.scss'
// import Searchbar from './Components/Searchbar'
import './App.css'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import login from './Pages/Login'
import register from './Pages/Register'
import start from './Pages/Start'
import camera from './Pages/CameraPage'
import CreatePost from './Pages/CreatePost'

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
          <Route path='/start' component={start}/>
          <Route path='/camera' component={camera}/>
          <Route path='/createPost' component={CreatePost}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App

import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Start from './Pages/Start'
import Camera from './Pages/CameraPage'
import CreatePost from './Pages/CreatePost'
import Post from './Pages/Post'
import LogOut from './Pages/LogOut'


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
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/start' component={Start}/>
          <Route path='/camera' component={Camera}/>
          <Route path='/createPost' component={CreatePost}/>
          <Route path='/post/:id' component={Post}/>
          <Route path='/logout' component={LogOut}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App

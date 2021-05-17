import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import login from './Pages/login'
import register from './Pages/register'
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
          <Route exact path='/' component={Navbar}/>
          <Route exact path='/login' component={login}/>
          <Route exact path='/register' component={register}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App

import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import login from './Pages/login';
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
          <Route path='/' component={Navbar}/>
          <Route exact path='/login' component={login}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App

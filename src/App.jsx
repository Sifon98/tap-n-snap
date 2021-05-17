import React from 'react'
import './Components/CSS/home.module.scss'
import Searchbar from './Components/Searchbar'
import './App.css'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
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
        </Switch>
      </Router>
    </div>
  )
}

export default App

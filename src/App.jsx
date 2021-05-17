import React from 'react'
// import './App.css'
import './Components/CSS/home.module.scss'
import Navbar from './Components/Navbar'
import Searchbar from './Components/Searchbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
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
        </Switch>
      </Router>
    </div>
  )
}

export default App

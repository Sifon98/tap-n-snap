import React from 'react'
import Navbar from '../Components/Navbar'
import styles from '../Components/CSS/start.module.scss'

function Start() {
  return (
    <div>
        <div className={styles.div}>
            <Navbar />

            <br />
            <button type="submit">Login</button>

            <button type="submit">Register</button>

        </div>      
    </div>
  )
}

export default Start

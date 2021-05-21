import React  from 'react'
import Navbar from '../Components/Navbar'
import styles from '../Components/CSS/start.module.scss'

function Start() {
  return (
    <div>
        <div className={styles.div}>
            <Navbar />

            <br />
            <button type="submit"
                    className={Style.btnsl}>Login</button>

                    <br/>
                    

            <button type="submit"
                    className={Style.btns}>Register</button>              
    </div>
  )
}

export default Start

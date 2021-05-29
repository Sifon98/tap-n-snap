import React from 'react'
import Style from './CSS/footer.module.scss'
import ScrollButton from '../Components/ScrollButton'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={Style.footer}>
            <div className={Style.iconContainer}>
                <Link className={Style.home} to="/"><i className="fas fa-home"></i></Link>
                <Link className={Style.camera} to="/camera"><i className="fas fa-camera"></i></Link>
                <Link className={Style.imageUpload} to="/createPost"><i className="fas fa-image"></i></Link>
                <Link className={Style.profile} to="/profile"><i className="fas fa-user"></i></Link>
            </div>
            <ScrollButton /> 
        </footer>
    )
}

export default Footer
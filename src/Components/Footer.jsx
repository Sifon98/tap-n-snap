import React from 'react'
import Style from './CSS/footer.module.scss'

var cameraIcon = "";
var imageIcon = "";


const Footer = () => {

    
    if (cameraBtn == true)
        cameraIcon =  <i className="fas fa-camera"></i>
    else 
        cameraIcon = ""
    

    if (imageBtn == true)
        imageIcon = <i className="fas fa-image"></i>
    else 
        imageIcon = ""
    return (
        <div className={Style.footer}>
            
            <a className={Style.camera} href="/">{cameraIcon}</a>
            <a className={Style.imageUpload} href="/">{imageIcon}</a>
            
        </div>
    )
}

export default Footer





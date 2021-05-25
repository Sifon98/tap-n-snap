import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";
// import Style from './CSS/camera.module.scss'



const CameraComponent = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
 
  return (
    <div>
      <Camera ref={camera} />
      <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
      <img src={image} alt='Taken photo'/>
    </div>
  );
}
 
export default CameraComponent;
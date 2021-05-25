import React from 'react'
import Webcam from "react-webcam";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user"
};

  const CameraPage = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <div className="cameraDiv">

        <Webcam
          mirrored={true}
          ref={webcamRef}
          screenshotFormat="image/jpeg/jpg"
          videoConstraints={videoConstraints}
          audio={false}
        />
      </div>

      <div className="buttonDiv">
        <button className="cameraButton" onClick={capture}>Take photo</button>
      </div>
      
      <br></br>
      {imgSrc && (
        <img className="previewImage"
          src={imgSrc}
        />
      )}
    </>
  );
};

export default CameraPage;

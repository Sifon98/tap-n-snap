import React from 'react'
import Webcam from "react-webcam";
import Style from '../Components/CSS/CameraPage.module.scss'

const videoConstraints = {
  width: 400,
  height: 1200,
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
      {/* <div className={Style.cameraDiv}> */}

        <Webcam
        //   width={400}
        //   height={1200}
          mirrored={true}
          ref={webcamRef}
          screenshotFormat="image/jpeg/jpg"
          videoConstraints={videoConstraints}
          audio={false} // allow-sound
          microphone={false}
        />
      {/* </div> */}

    <div className={Style.previewContainer}>
      <div className={Style.buttonDiv}>

        {imgSrc && (
            <img className={Style.previewImage}
            src={imgSrc}
            />
            )}
          </div>
        <button className={Style.cameraButton} onClick={capture}></button>
      </div>
    </>
  );
};

export default CameraPage;

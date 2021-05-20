import React from 'react'

export default function CameraComponent() {
    return (


        <div>
            
        <video id="player" autoplay></video>
        <canvas id="canvas" width="320px" height="240px"></canvas>
        <br/>
        <button id="capture-btn">Capture</button>
        <button id="new-capture-btn">Retake picture</button>

        <div id="pick-image">
            <h6>Pick an Image instead</h6>
            <input type="file" accept="image/*" id="image-picker"/>
        </div> 

        <br/>
        <button id="location-btn">Get Location</button>
        <div id="location-display"></div>

        <br/>
        <button id="post-btn">Post image</button>

        <br/>
        <p>Saved picture:</p>
        <img id="saved-picture" />

            <script src="/src/Components/camera.js"></script>


        </div>
        
    )
}

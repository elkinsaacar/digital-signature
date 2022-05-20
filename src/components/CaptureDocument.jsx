import React, { useRef } from "react";
import Webcam from "react-webcam";
// import Camera from 'react-html5-camera-photo';

const CaptureDocument = () => {

    const webcamRef = useRef(null);

    // const handleTakePhoto = (dataUri) => {
    //     // Do stuff with the photo...
    //     console.log('takePhoto');
    // }

    const videoConstraints = {
        facingMode: { exact: "environment" }
    };

    return(
        <div >
            Capturar camara
            {/* La camara solo funcionará si el protocolo es HTTPS */}
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg"  videoConstraints={videoConstraints} />
            {/* <Camera onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } } /> */}
            <input accept="image/*" id="icon-button-file" type="file" capture="environment" />
        </div>
    )
};

export default CaptureDocument;
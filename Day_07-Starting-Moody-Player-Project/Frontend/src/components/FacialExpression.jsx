import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

function FacialExpression() {
  const videoRef = useRef();
  const [expression, setExpression] = useState("");

  // Start webcam
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => console.error("Error accessing webcam:", err));
  }, []);

  // Load models
  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
    };
    loadModels();
  }, []);

  // Detect expressions
  useEffect(() => {
    const detect = async () => {
      if (videoRef.current) {
        const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();

        if (detections.length > 0) {
          const exp = detections[0].expressions;
          const bestExp = Object.keys(exp).reduce((a, b) => exp[a] > exp[b] ? a : b);
          setExpression(bestExp);
        }
      }
    };

    const interval = setInterval(detect, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay width="600" height="400" />
      <h2>Detected Expression: {expression}</h2>
    </div>
  );
}

export default FacialExpression;

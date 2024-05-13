import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { useState, Text } from "react";
import { createRoot } from "react-dom/client";
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Model } from "./models/Duck";
import { Ctube } from "./models/Color_tube";

function ShowText({ text = 'Default Text', position = [0, 0.5, 0], fontSize = 0.2, color = 'white' }) {
  const [showText, setShowText] = useState(false);

  return (
    <>
      {showText && (
        <Text position={position} fontSize={fontSize} color={color}>
          {text}
        </Text>
      )}
    </>
  );
}



function Box() {
  const [selected, setSelected] = useState(false);

  return (
    <mesh onClick={() => setSelected(!selected)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={selected ? "yellow" : "hotpink"} />
    </mesh>
  );
}



createRoot(document.getElementById("root")).render(
  
  <ARCanvas
    onCameraStreamReady={() => console.log("Camera stream ready")}
    onCameraStreamError={() => console.error("Camera stream error")}
    sourceType={"webcam"}
    matrixCodeType = {"3x3"} 
    detectionMode = {"mono_and_matrix"} 
    cameraParametersUrl = {"/data/camera_para.dat"}  
    patternRatio = {0.5}     
                        
  >
 
    <ambientLight />
    <pointLight position={[10, 10, 0]} intensity={10.0} />
    <ARMarker
      debug={true}
      params={{ smooth: true }}
      type={"barcode"}
      barcodeValue ={31}
      
      onMarkerFound={() => {
        console.log("Marker Found");
      }}
    >
      <Ctube />
    </ARMarker>
    <ARMarker
     
      params={{ smooth: true }}
      type={"barcode"}
      barcodeValue ={1}
      onMarkerFound={() => {
       
        console.log("Marker Found");
        setShowText(true); 
      }}
    >
      <ShowText text="ATRADU" /> 
      <Box />
    </ARMarker>
  </ARCanvas>
);

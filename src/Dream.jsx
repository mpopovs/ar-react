
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { useState, Suspense } from "react";
import { Tube } from "./models/Color_tube";
import { Putns } from "./models/7c";
import { Canvas } from "@react-three/fiber";
import { Text, ScreenSpace} from "@react-three/drei";
import { create } from 'zustand';
import { useLocation } from "wouter"; // Import useLocation


// Zustand Store
// const useStore = create((set) => ({
//   markerName: "Hey!", 
//   setMarkerName: (name) => set({ markerName: name })
// }));


function Box() {
    const [selected, setSelected] = useState(false);
  
    return (
      <mesh onClick={() => setSelected(!selected)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={selected ? "yellow" : "hotpink"} />
       
      </mesh>
    );
  }
  export default function App() {
    // const { markerName, setMarkerName } = useStore();
    const [, setLocation] = useLocation(); // Get setLocation to navigate

  return (
    <>

    <Suspense fallback={<div>Loading...</div>}>
    <h2 onClick={() => setLocation("/")}>Hey!</h2> 
  <h3>OnModelFound</h3>
     
   
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
      params={{ smooth: true }}
      type={"barcode"}
      barcodeValue ={31}
      onMarkerFound={() => {
        console.log('Marker 31');
        
      }}
    >
       <Text 
    color="black" 
    anchorX="center" 
    anchorY="middle"
    position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
    rotation={[-Math.PI/2, 0, Math.PI /2]}
    scale={[0.2, 0.2, 0.2]}
>   
    Tube
</Text>

      <Tube scale={[0.2, 0.2, 0.2]} rotation={[0, Math.PI, 0]}/>

    </ARMarker>
    <ARMarker
     
      params={{ smooth: true}}
      type={"barcode"}
      barcodeValue ={1}
     
    >
  
 
  <Putns scale={[2, 2, 2]} rotation={[Math.PI /2, 0, Math.PI /2]} position={[0.5, 0, 0]}/>
  <Text 
    color="black" 
    anchorX="center" 
    anchorY="middle"
    position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
    rotation={[-Math.PI/2, 0, Math.PI /2]}
    scale={[0.2, 0.2, 0.2]}
>   
    Putns 
    1984
</Text>

    
  
      
    </ARMarker>
   
  </ARCanvas>
  
  </Suspense>
  </>
  );
}
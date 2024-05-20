import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import { useState, Suspense } from "react";
import { Lauva } from "./models/Lauva";
import { Putns } from "./models/7c";
import { Model1 } from "./models/1";
import { Model2 } from "./models/2";
import { Model3 } from "./models/3";
import { Model5 } from "./models/5";
import { Model6 } from "./models/6";
import { Model8 } from "./models/8";
import { Model9 } from "./models/9";
import { Jautrais} from "./models/JautraisAR";
import { Text, ScreenSpace} from "@react-three/drei";
import { useLocation } from "wouter"; // Import useLocation

function Box() {
  const [selected, setSelected] = useState(false);

  return (
    <mesh onClick={() => setSelected(!selected)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={selected ? "yellow" : "hotpink"} />
    </mesh>
  );
}

export default function Dream() {
  const [, setLocation] = useLocation(); // Get setLocation to navigate

  return (
    <>
      <Suspense fallback={<div className="center-text">Loading...</div>}>
        {/* <h2 className='back' onClick={() => setLocation("/")}>Back</h2> */}
        <div className="flex flex-col items-center justify-center h-screen w-screen">
        <img onClick={() => setLocation("/")} className="close" src="/close.svg" alt="close button" />
        <img  className="logo" src="logo.svg" alt="logo" />
        </div>
          <ARCanvas
            className="h-full w-full"
            onCameraStreamReady={() => console.log("Camera stream ready")}
            onCameraStreamError={() => console.error("Camera stream error")}
            sourceType={"webcam"}
            matrixCodeType={"3x3"}
            detectionMode={"mono_and_matrix"}
            cameraParametersUrl={"/data/camera_para.dat"}
            patternRatio={0.5}
          >
            <ambientLight intensity={4.0} />
            <pointLight position={[10, 10, 0]} intensity={10.0} />
            <ARMarker
              params={{ smooth: true }}
              type={"barcode"}
              barcodeValue={31}
              onMarkerFound={() => {
                console.log('Marker 31');
              }}
            >
              <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.2, 0.2, 0.2]}
              >
                Lauva 2008
              </Text>
              <Lauva scale={[0.5, 0.5, 0.5]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.5]}/>
            </ARMarker>
            <ARMarker
              params={{ smooth: true }}
              type={"barcode"}
              barcodeValue={11}
            >
              <Putns scale={[1, 1, 1]} rotation={[Math.PI / 2, 0, Math.PI ]} position={[0, 0, 0.5]} />
              <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.2, 0.2, 0.2]}
              >
                Sapņu vārna
                2011
              </Text>
            </ARMarker>
            <ARMarker
              params={{ smooth: true }}
              type={"barcode"}
              barcodeValue={6}
            >
              <Model1 scale={[0.7, 0.7 , 0.7]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.5]} />
              <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.2, 0.2, 0.2]}
              >
                Sapņu putns no Amerikas
                1993
              </Text>
            </ARMarker>
            <ARMarker
              params={{ smooth: true }}
              type={"barcode"}
              barcodeValue={19}
            >
              <Model2 scale={[0.2, 0.2, 0.2]} rotation={[Math.PI / 2, Math.PI, Math.PI ]} position={[0, 0, 0.5]} />
              <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.2, 0.2, 0.2]}
              >
                Tornis
                1992
              </Text>
            </ARMarker>
            <ARMarker
              params={{ smooth: true }}
              type={"barcode"}
              barcodeValue={25}
            >
              <Model3 scale={[3, 3, 3]} rotation={[Math.PI / 2, Math.PI, Math.PI]} position={[0, 0, 0.5]} />
              <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.2, 0.2, 0.2]}
              >
                Sapņu vārnas biste
                1991
              </Text>
            </ARMarker>
            <ARMarker
              params={{ smooth: true }}
              type={"barcode"}
              barcodeValue={16}
            >
              <Model9 scale={[0.2, 0.2, 0.2]} rotation={[Math.PI / 2, 0, Math.PI]} position={[0, 0, 0.5]} />
              <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.2, 0.2, 0.2]}
              >
                Civilizācijas pēdas
                1978
              </Text>
            </ARMarker>
            <ARMarker
              params={{ smooth: true }}
              type={"barcode"}
              barcodeValue={37}
            >
              <Model5 scale={[1, 1, 1]} rotation={[Math.PI / 2, 0, Math.PI]} position={[0, 0, 0.5]} />
              <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.2, 0.2, 0.2]}
              >
                Par Mariju domājot
                1999
              </Text>
            </ARMarker>
            <ARMarker
              params={{ smooth: true }}
              type={"barcode"}
              barcodeValue={28}
            >
              <Model8 scale={[1, 1, 1]} rotation={[Math.PI / 2, 0, 0]}  position={[0, 0, -0.5]} />
              <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.2, 0.2, 0.2]}
              >
                Vārnu pods
                1996
              </Text>
            </ARMarker>
            <ARMarker
              params={{ smooth: true }}
              type={"barcode"}
              barcodeValue={5}
            >
              <Model6 scale={[0.2, 0.2, 0.2]} rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[0.5, 0, 0]} />
              <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.2, 0.2, 0.2]}
              >
                Tornis
                1998
              </Text>
            </ARMarker>
            <ARMarker
              params={{ smooth: true }}
              type={"barcode"}
              barcodeValue={2}
            >
              <Jautrais scale={[0.5, 0.5, 0.5]} rotation={[0, 0, Math.PI / 2]} position={[0.5, 0, 0]} />
              <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                position={[0.7, 0, 0]} // Example: X, Y, Z coordinates
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.2, 0.2, 0.2]}
              >
                Jautrais nams
                1998
              </Text>
            </ARMarker>
          </ARCanvas>
       
      </Suspense>
    </>
  );
}

// Home.jsx
import React, { useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Stars, OrbitControls } from '@react-three/drei';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


function RotatingBox(props) {
    const [, setLocation] = useLocation(); // Get setLocation function
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * props.speed;
  });

  return (
   
    <Box 
    ref={ref} {...props} 
    args={[1, 1, 1]} 
    position={[0, 0, 0]}
    onClick={() => setLocation('/dream')} // Set location to "/dream" on click
  >
    <meshStandardMaterial color="orange" />
  </Box>
  );
}

export default function Home() {
    

  return (
    <div>
      <h2 className="text-3xl font-bold underline">Spied uz kubu!</h2>
      <BrowserView>
  <h1 className='text-zinc-400'>This is rendered only in browser</h1>
</BrowserView>
<MobileView>
  <h1>This is rendered only on mobile</h1>
</MobileView>

      <Canvas >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
       <RotatingBox
       speed={0.15}
       />

        {/* Rotating Stars with Custom Props */}
        {/* <RotatingStars
          radius={30} 
          depth={10} 
          count={5000} 
          factor={4} 
          saturation={1} 
          fade 
          speed={0.15} // Rotation speed
        /> */}
        <OrbitControls/>
      </Canvas>

      
    </div>
  );
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 1.glb -T 
Files: 1.glb [2.35MB] > /Users/marispopovs/Downloads/PM react/public/1-transformed.glb [251.4KB] (89%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model1(props) {
  const { nodes, materials } = useGLTF('/1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['1-10-4k'].geometry} material={materials['1-10-4k']} />
    </group>
  )
}

useGLTF.preload('/1-transformed.glb')
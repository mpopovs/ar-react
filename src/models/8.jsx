/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 8.glb -T 
Files: 8.glb [4.49MB] > /Users/marispopovs/Downloads/PM react/public/8-transformed.glb [318.72KB] (93%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model8(props) {
  const { nodes, materials } = useGLTF('/8-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['8-10-4k'].geometry} material={materials['8-10-4k']} />
    </group>
  )
}

useGLTF.preload('/8-transformed.glb')
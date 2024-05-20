/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 2.glb -T 
Files: 2.glb [2.17MB] > /Users/marispopovs/Downloads/PM react/public/2-transformed.glb [219.08KB] (90%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model2(props) {
  const { nodes, materials } = useGLTF('/2-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['2-12-4k'].geometry} material={materials['2-12-4k']} />
    </group>
  )
}

useGLTF.preload('/2-transformed.glb')
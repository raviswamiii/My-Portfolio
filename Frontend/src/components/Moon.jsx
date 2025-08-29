import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Moon(props) {
  const { nodes, materials } = useGLTF('/models/moon.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.moon_Material001_0.geometry}
          material={materials['Material.001']}
          position={[10.263, 20.594, -291.581]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={445.587}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')




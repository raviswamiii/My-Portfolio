import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/models/hologram_globe_using_geometry_nodes.glb'
  )
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="GeoGlobefbx" rotation={[Math.PI / 2, 7, 6]} scale={5.04}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Globe001"
                  position={[2, 0, 0]}
                  rotation={[-Math.PI / 2, 0, 0.013]}
                  scale={5.563}>
                  <mesh
                    name="Globe001_BLUE_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe001_BLUE_0.geometry}
                    material={materials.BLUE}
                  />
                  <mesh
                    name="Globe001_BLUE_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe001_BLUE_0_1.geometry}
                    material={materials.BLUE}
                  />
                  <mesh
                    name="Globe001_BLUE_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe001_BLUE_0_2.geometry}
                    material={materials.BLUE}
                  />
                  <mesh
                    name="Globe001_BLUE_0_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe001_BLUE_0_3.geometry}
                    material={materials.BLUE}
                  />
                  <mesh
                    name="Globe001_BLUE_0_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe001_BLUE_0_4.geometry}
                    material={materials.BLUE}
                  />
                  <mesh
                    name="Globe001_BLUE_0_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe001_BLUE_0_5.geometry}
                    material={materials.BLUE}
                  />
                  <mesh
                    name="Globe001_BLUE_0_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe001_BLUE_0_6.geometry}
                    material={materials.BLUE}
                  />
                  <mesh
                    name="Globe001_BLUE_0_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe001_BLUE_0_7.geometry}
                    material={materials.BLUE}
                  />
                  <mesh
                    name="Globe001_BLUE_0_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe001_BLUE_0_8.geometry}
                    material={materials.BLUE}
                  />
                  <mesh
                    name="Globe001_BLUE_0_9"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe001_BLUE_0_9.geometry}
                    material={materials.BLUE}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/hologram_globe_using_geometry_nodes.glb')



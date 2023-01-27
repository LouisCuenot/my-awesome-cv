import React, {useRef} from 'react'
import { CuboidCollider, RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const MovingBar = () => {

    const stopBar = useRef<RigidBodyApi>(null!)
    const meshBar = useRef<THREE.Mesh>(null!)
  
    useFrame((state)=>{
  
    
  
      meshBar.current.position.set(Math.sin(state.clock.elapsedTime*0.4)*10,0.3,0)
  
      //O.4 rules the speed and 10 the length
  
      const barPos = meshBar.current.getWorldPosition(new THREE.Vector3(0,0,0))
      const barRot = meshBar.current.getWorldQuaternion(new THREE.Quaternion(0,0,0,1))
      stopBar.current.setRotation(barRot)
      stopBar.current.setTranslation(barPos)
    })
  



  return (
    <>
        <RigidBody
          colliders={false}
          type='kinematicPosition'
          ref={stopBar}
        >
          <CuboidCollider
            args={[0.15,0.15,5]}
            position={[0,0,0]}
          >
          </CuboidCollider>
        </RigidBody>
        <mesh
          ref={meshBar}
        >
          <boxGeometry
            args={[0.3,0.3,10]}
          />
          <meshStandardMaterial color={0x493423}/>
        </mesh>
    </>
  )
}

export default MovingBar
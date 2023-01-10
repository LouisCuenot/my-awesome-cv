import { useHelper } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from 'three'

const Directionnal = () => {

    const directionnalL = useRef(null!)
    useHelper(directionnalL,THREE.DirectionalLightHelper,1)

  return (
    <directionalLight intensity={1} position={[5,10,0]}  castShadow ref={directionnalL} />
  )
}

export default Directionnal
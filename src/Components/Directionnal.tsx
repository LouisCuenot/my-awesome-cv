import { useHelper } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from 'three'

const Directionnal = () => {



  return (
    <directionalLight intensity={1.5} position={[5,10,0]}  castShadow />
  )
}

export default Directionnal
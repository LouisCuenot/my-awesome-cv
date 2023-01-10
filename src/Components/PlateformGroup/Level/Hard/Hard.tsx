import React from 'react'
import { Image } from '@react-three/drei'

const Hard = () => {
  return (
    <>
        <Image
            url='/img/HardFrame.png'
            rotation={[-Math.PI*0.5,0,0]}
            position={[0,0.11,0]}
            transparent
            scale={[15.25,8.25]}
            
        />
    </>
  )
}

export default Hard
import React from 'react'
import { Image } from '@react-three/drei'

const Medium = () => {
  return (
    <>
        <Image
            url='/img/MediumFrame.png'
            rotation={[-Math.PI*0.5,0,0]}
            position={[0,0.11,0]}
            transparent
            scale={[15.25,8.25]}
        />
    </>
  )
}

export default Medium
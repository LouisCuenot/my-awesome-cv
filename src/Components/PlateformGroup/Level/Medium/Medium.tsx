import React, { useRef, Ref, useEffect } from 'react'
import { Image } from '@react-three/drei'
import MovingBar from '../Obstacles/MovingBar/MovingBar'


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
        <MovingBar/>
        
    </>
  )
}

export default Medium